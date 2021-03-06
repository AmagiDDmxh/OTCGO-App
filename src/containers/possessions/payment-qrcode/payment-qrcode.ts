import { Component } from '@angular/core'
import {
	IonicPage,
	NavParams
} from 'ionic-angular'
import { Clipboard } from '@ionic-native/clipboard'
import { SocialSharing } from '@ionic-native/social-sharing'
import { NotificationProvider } from '../../../providers/notification.provider'

@IonicPage({
	name: 'payment-qrcode'
})
@Component({
	selector: 'page-payment-qrcode',
	template: `
	  <ion-header class="otcgo-header">
		  <ion-navbar></ion-navbar>
	  </ion-header>
	  <ion-content>
		  <div class="qrcode__content">
			  <ngx-qrcode [qrc-value]="address"></ngx-qrcode>

			  <div class="title">{{ 'POSSESSIONS.QR_CODE.address' | translate }}</div>
			  <div class="address">{{ address }}</div>

			  <button ion-button
			          class="otcgo-button--colour"
			          round
			          full
			          (click)="copy()">{{ 'POSSESSIONS.QR_CODE.copy' | translate }}
			  </button>
			  <button ion-button
			          class="otcgo-button--edge"
			          round
			          clear
			          full
			          (click)="share()">{{ 'POSSESSIONS.QR_CODE.share' | translate }}
			  </button>
		  </div>
	  </ion-content>
	`
})
export class PaymentQRCodePage {
	address: string

	constructor (
		navParams: NavParams,
		private clipboard: Clipboard,
		private socialSharing: SocialSharing,
		private ns: NotificationProvider
	) {
		this.address = navParams.get('address')
	}

	copy () {
		this.clipboard.copy(this.address)
		console.log('copy action')
		this.ns.emit({ message: 'copy success' })
	}

	share () {
		this.socialSharing.share(this.address)
	}
}
