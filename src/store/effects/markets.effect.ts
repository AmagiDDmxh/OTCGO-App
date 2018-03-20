import { Injectable } from '@angular/core'
import { RootState } from '../reducers'
import { PriceProvider } from '../../providers/index'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { of } from 'rxjs/observable/of'
import { fromPromise } from 'rxjs/observable/fromPromise'

import {
	skip,
	timeout,
	mergeMap,
	takeUntil,
	switchMap,
	catchError,
	debounceTime,
	publishLast,
	refCount,
	withLatestFrom
} from 'rxjs/operators'

import { Load, LoadFail, LoadSuccess, MarketsActionTypes } from '../actions/markets.action'
import { Load as LoadPricesSuccess } from '../actions/prices.action'

import { api } from '../../libs/neon'
import { Observable } from 'rxjs/Observable'
import {
	Action,
	Store
} from '@ngrx/store'


@Injectable()
export class MarketsEffects {
	@Effect()
	load$: Observable<Action> =
		this.actions$.pipe(
			ofType<Load>(MarketsActionTypes.LOAD),
			debounceTime(300),
			withLatestFrom(this.store$, (action, state) => state.settings.currency),
			switchMap(currency => {
				const nextLoad$ = this.actions$.pipe(
					ofType<Load>(MarketsActionTypes.LOAD),
					skip(1)
				)

				return loadMarkets(nextLoad$, currency)
			})
		)

	constructor (private actions$: Actions, private store$: Store<RootState>) {}
}

function loadMarkets (nextLoad$, baseCurrency = 'cny') {
	return fromPromise(
		api.cmc.getMarkets(PriceProvider.NEO_CHAIN_COINS, baseCurrency)
	).pipe(
		takeUntil(nextLoad$),
		timeout(2628),
		publishLast(),
		refCount(),
		mergeMap(
			markets => [
				new LoadPricesSuccess(
					markets.map(ticker => ({ [ticker.symbol]: ticker.currentPrice }))
								 .reduce((acc, cur) => ({...acc, ...cur}), {})
				),
				new LoadSuccess(markets)
			]
		),
		catchError(error => of(new LoadFail(error)))
	)
}