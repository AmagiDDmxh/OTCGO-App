import {
	Component,
	OnDestroy,
	OnInit
} from '@angular/core'
import {
	IonicPage,
	NavController,
	Refresher
} from 'ionic-angular'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/take'

import { IBalance } from '../../shared/models'
import { Account } from '../../shared/typings'
import { LoadingProvider, NotificationProvider } from '../../providers'
import { BalancesActions } from '../../store/actions'
import { WalletSelectors, BalancesSelectors, PricesSelectors, SettingsSelectors } from '../../store/selectors'
import { fromBalances, fromWallet } from '../../store/reducers'


@IonicPage({
	name: 'Possessions',
	segment: 'possessions'
})
@Component({
	selector: 'page-possessions',
	templateUrl: 'possessions.html'
})
export class PossessionsPage implements OnInit, OnDestroy {
	exits: boolean
	balances: Observable<IBalance[]>
	account: Observable<Account> = this.store.select(WalletSelectors.getAccount)
	amount: Observable<number> = this.store.select(PricesSelectors.getDefaultAccountAmount)
	baseCurrency: Observable<string> = this.store.select(SettingsSelectors.getCurrency)
	selectedBalanceSubscriber: Subscription

	get displayZero () { return this._displayZero }
	set displayZero (val) {
		this.updateBalances(val)
		this._displayZero = val
	}
	private _displayZero = false


	constructor (
		public navCtrl: NavController,
		private notificationProvider: NotificationProvider,
		private lp: LoadingProvider,
		private store: Store<fromBalances.State | fromWallet.State>
	) {}

	ionViewCanEnter () {
		return this.exits
	}

	ngOnInit () {
		this.updateBalances(this.displayZero)
		// this.store.dispatch(new BalancesActions.Load())
		this.store
				.select(BalancesSelectors.getLoading)
				.subscribe(loading => this.lp.emit(loading))
		this.store
				.select(BalancesSelectors.getError)
				.subscribe(error => error && this.notificationProvider.emit({ message: error }))
		this.store.select(WalletSelectors.getExits).subscribe(exits => this.exits = exits)
	}

	ngOnDestroy () {

	}

	updateBalances (displayZero) {
		this.balances = displayZero
			? this.store.select(BalancesSelectors.getDefaultEntities)
			: this.store.select(BalancesSelectors.getDefaultNonZeroEntities)
	}

	doRefresh (refresher: Refresher) {
		this.store.dispatch(new BalancesActions.Load())
		this.store
				.select(BalancesSelectors.getLoading)
				.subscribe(loading => !loading && refresher.complete())
	}

	handleBalanceSelect (symbol) {
		this.store.dispatch(new BalancesActions.Select(symbol))
		this.selectedBalanceSubscriber = this.store.select(BalancesSelectors.getSelectedBalance)
																				 .take(1)
																				 .subscribe(selectedBalance => {
																					 selectedBalance && this.navCtrl.push('PossessionDetail')
																				 })
	}

	handleDisplayZeroClick (bool) {
		this.displayZero = bool
	}
}
