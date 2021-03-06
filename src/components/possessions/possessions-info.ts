import { Component, Input } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Account } from '../../shared/typings'

@Component({
	selector: 'possessions-info',
	template: `
	  <ion-card class="card-info">
		  <div class="card-avatar" (click)="openQRCode()">
			  <img src="assets/imgs/icon-avatar.svg" alt="">
		  </div>
		  <div class="card-title">{{ account?.address | addressCollapse }}</div>
	  </ion-card>
	`
})
export class PossessionsInfoComponent {
	@Input() account: Account

	constructor (private navCtrl: NavController) {}

	openQRCode () {
		this.navCtrl.push('payment-qrcode', { address: this.account && this.account.address })
	}
}
