import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { of } from 'rxjs/observable/of'
import { catchError, concatMap, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../reducers'
import { WalletProvider } from '../../providers'

import {
	WalletActionTypes, Load, LoadSuccess, LoadFail, AddAccount, AddAccountSuccess, AddAccountFail
} from '../actions/wallet.action'

@Injectable()
export class WalletEffects {
	@Effect()
	Load$ =
		this.actions$
				.pipe(
					ofType<Load>(WalletActionTypes.LOAD),
					map(_=> fromPromise(this.walletProvider.checkWalletFile())),
					exhaustMap(exists =>
						exists
							? fromPromise(this.walletProvider.readWalletFile()).map(file => new LoadSuccess(JSON.parse(file)))
							: of(new LoadFail('Require login'))
					),
					catchError(e => of(new LoadFail(e)))
				)

	/*@Effect()
	AddAccount =
		this.actions$
				.pipe(
					ofType<AddAccount>(WalletActionTypes.ADD_ACCOUNT),
					map(action => {
						console.log(action)
						return action.payload
					}),
					catchError(e => of(new AddAccountFail(e))),
					map(_=> new AddAccountSuccess()),
					catchError(e => of(new AddAccountFail(e)))
				)*/

	/*Save$ =
		this.actions$
				.pipe(
					ofType(
						WalletActionTypes.LOAD_SUCCESS,
						WalletActionTypes.ADD_ACCOUNT_SUCCESS,
						WalletActionTypes.ADD_ACCOUNTS_SUCCESS,
						WalletActionTypes.REMOVE_ACCOUNT_SUCCESS,
					),
					// tap()
				)*/

	constructor (
		private actions$: Actions,
		private store$: Store<RootState>,
		private walletProvider: WalletProvider
	) {}
}
