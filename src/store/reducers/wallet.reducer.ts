
import { ActionReducer } from '@ngrx/store'
import { WalletActions, WalletActionTypes } from '../actions/wallet.action'
import { AuthActions, AuthActionTypes } from '../actions/auth.action'
import { Wallet } from '../../shared/typings'
import { wallet } from '../../libs/neon'
import { DEFAULT_EMPTY_WALLET } from '../../shared/constants'


export interface State {
	error: string | Error
	loading: boolean
	entity: Wallet
}

const initialState: State = {
	error: '',
	loading: false,
	entity: new wallet.Wallet(DEFAULT_EMPTY_WALLET)
}

export const reducer: ActionReducer<State> = (
	state = initialState,
	action: WalletActions | AuthActions
): State => {
	switch (action.type) {
		case WalletActionTypes.ADD_ACCOUNT: {
			const { payload } = action
			const accounts = state.entity.accounts.slice()
			accounts.push(payload)

			const entity = new wallet.Wallet({ ...state.entity, accounts })

			return {
				...state,
				entity
			}
		}

		case WalletActionTypes.CHANGE_ACCOUNT_LABEL: {
			const { payload } = action
			const accounts = state.entity.accounts.map(account =>
				account.address === payload.address
					? payload
					: account
			)

			const entity = new wallet.Wallet({ ...state.entity, accounts })

			return {
				...state,
				entity
			}
		}

		case WalletActionTypes.SET_DEFAULT_ACCOUNT: {
			const { payload } = action

			const accounts = state.entity.accounts.map(account => {
				const tempAcct = new wallet.Account(account)
				tempAcct.isDefault = account.address === payload.address
				return tempAcct
			})
			const entity = new wallet.Wallet({ ...state.entity, accounts })

			return {
				...state,
				entity
			}
		}

		case WalletActionTypes.REMOVE_ACCOUNT: {
			const { payload } = action
			const accounts = state.entity
														.accounts
														.filter(account => account.address !== payload.address)
														.map(account => new wallet.Account(account))

			console.log(accounts)

			if (payload.isDefault) {
				accounts[0].isDefault = true
			}

			const entity = new wallet.Wallet({ ...state.entity, accounts })

			console.log(entity)

			return {
				...state,
				entity
			}
		}

		case WalletActionTypes.LOAD:
		case AuthActionTypes.LOGIN_OLD_WALLET: {
			return {
				...state,
				loading: true
			}
		}

		case WalletActionTypes.LOAD_FAIL:
		case WalletActionTypes.ADD_ACCOUNT_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}

		case WalletActionTypes.LOAD_SUCCESS:
		case AuthActionTypes.LOGIN_SUCCESS: {
			return {
				...state,
				loading: false,
				entity: action.payload
			}
		}

		case WalletActionTypes.ADD_ACCOUNT_SUCCESS: {
			return {
				...state,
				loading: false
			}
		}

		default: return state
	}
}
