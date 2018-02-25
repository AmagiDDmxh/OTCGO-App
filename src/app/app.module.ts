import { NgModule, ErrorHandler } from '@angular/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'

import { TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { IonicApp, IonicModule, IonicErrorHandler, } from 'ionic-angular'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { MyApp } from './app.component'
import { dev } from '../environments/environment'
import { metaReducers, reducers } from '../reducers'
import { CoreModule } from './core.module'
import { BalancesEffects } from '../effects/balances.effect'

function createTranslateLoader (http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json')
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    dev ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([BalancesEffects]),
    IonicModule.forRoot(MyApp, {
      tabbarPlacement: 'bottom',
      preloadModules: true,
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      tabsHideOnSubPages: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateHttpLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    CoreModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
