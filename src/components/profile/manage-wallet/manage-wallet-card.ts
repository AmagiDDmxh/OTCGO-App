import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core'
import { Clipboard } from '@ionic-native/clipboard'
import {
	AlertController,
	AlertOptions,
	LoadingController
} from 'ionic-angular'
import { wallet } from '../../../libs/neon'
import { Account } from '../../../shared/typings'


@Component({
	selector: 'manage-wallet-card',
	templateUrl: 'manage-wallet-card.html'
})
export class ManageWalletCard implements OnInit {
	@Input() account: Account
	@Input() oCurrency: string
	@Input() amount: number
	@Input() gas: number
	@Input() showClose: boolean
	@Output() onSave = new EventEmitter<Account>()
	@Output() onRemove = new EventEmitter<Account>()
	@Output() onSetDefault = new EventEmitter<Account>()

	tempLabel = ''
	alertOptions = {
		cssClass: 'mw__exports-actions--box',
		message: '注意，导出 私钥 或 WIF 并使用是一件非常危险的事情，建议使用加密私钥（EncryptedKey）代替',
		inputs: [{ name: 'passphrase', placeholder: '钱包密码', type: 'password' }],
		buttons: [
			{ text: '取消' }
		]
	}

	get label () { return this.account.label }
	get isDefault () { return this.account.isDefault }

	constructor (
		private alertCtrl: AlertController,
		private clipBoard: Clipboard,
		private loadingCtrl: LoadingController
	) { }

	ngOnInit () {}

	handleRemoveClick (account) {
		this.onRemove.emit(account)
	}

	handleSaveClick (account) {
		if (this.tempLabel) {
			const acct = new wallet.Account(account)
			acct.label = this.tempLabel
			this.onSave.emit(acct)
			this.tempLabel = ''
		}
	}

	handleSetDefaultClick (account) {
		this.onSetDefault.emit(account)
	}

	handleWIFClick (account) {
		this.showWIFKeyBox(account)
		console.log('[HandleWIFClick]', account)
	}

	handleEncryptedClick (account) {
		this.showKeyBox({ title: 'EncryptedKey', message: account.encrypted })
	}

	showWIFKeyBox (account) {
		const commonLoading = this.loadingCtrl.create()
		const alertOptions = Object.assign({}, this.alertOptions, {
			title: '导出WIF',
			buttons: [
				...this.alertOptions.buttons,
				{
					text: '确认',
					handler: ({ passphrase }) => {
						if (!passphrase || passphrase.length < 4) return false
						this.parsePassphrase(account.encrypted, passphrase, commonLoading, 'wif')
					}
				}
			]
		})
		const prompt = this.alertCtrl.create(alertOptions)
		prompt.present()
	}

	showKeyBox ({ title, message }) {
		const prompt = this.alertCtrl.create(<AlertOptions>{
			title,
			message,
			cssClass: 'mw__exports-actions--key',
			buttons: [
				{ text: '取消' },
				{
					text: '复制',
					handler: () => this.clipBoard.copy(message)
				}
			]
		})
		prompt.present()
	}

	showPrivateKeyBox (account) {
		const commonLoading = this.loadingCtrl.create()
		const alertOptions = Object.assign({}, this.alertOptions, {
			title: '导出私钥',
			buttons: [
				...this.alertOptions.buttons,
				{
					text: '确认',
					handler: ({ passphrase }) => {
						if (!passphrase || passphrase.length <= 4) return false
						this.parsePassphrase(
							account.encrypted, passphrase, commonLoading, 'privateKey')
					}
				}
			]
		})
		const prompt = this.alertCtrl.create(alertOptions)
		prompt.present()
	}

	async parsePassphrase (encryptedKey, passphrase, commonLoading, type) {
		await commonLoading.present()
		try {
			const wif = wallet.decrypt(encryptedKey, passphrase)
			let account = new wallet.Account(wif)
			await commonLoading.dismiss()
			console.log(account)
			if (type === 'privateKey')
				return this.showKeyBox({ title: '私钥', message: account['privateKey'] })
			return this.showKeyBox({ title: 'WIF', message: account['WIF'] })
		} catch (error) {
			await this.handleError(commonLoading)
		}
	}

	async handleError (loading) {
		await loading.dismiss()

		const prompt = this.alertCtrl.create({
			title: '提示',
			message: '密码错误',
			buttons: ['OK']
		})

		await prompt.present()
	}

	/* Leave this two for later feature */
	handleOpenLocationClick () {

	}

	handlePrivateKeyClick (account) {

	}
}
