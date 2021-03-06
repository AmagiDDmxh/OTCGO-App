import {
	createFeatureSelector,
	createSelector
} from '@ngrx/store'
import { Currency } from '../../shared/constants'
import { State } from '../reducers/settings.reducer'

const getState = createFeatureSelector('settings')

export const getLanguage = createSelector(
	getState,
	(state: State) => state.language
)

export const getCurrency = createSelector(
	getState,
	(state: State) => state.currency
)

export const getCurrencySymbol = createSelector(
	getCurrency,
	currency => {
		return Currency[currency] || '￥'
	}
)

export const getLoading = createSelector(
	getState,
	(state: State) => state.loading
)

export const getError = createSelector(
	getState,
	(state: State) => state.error
)
