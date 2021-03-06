import { Component, ViewChild } from '@angular/core'
import { IonicPage, Tabs } from 'ionic-angular'
import { TranslateService } from '@ngx-translate/core'


@IonicPage({
  name: 'Tabs',
  segment: 'tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  selectedIndex: number = 0
  tabs: any[]

  @ViewChild('ionTabs') tabRef: Tabs

  private balancesTitle: string = 'possessions'
  private marketsTitle: string = 'markets'
  private discoverTitle: string = 'discover'
  private profileTitle: string = 'profile'

  constructor (private trs: TranslateService) {
    this.tabs = [
      { root: 'Possessions', title: this.balancesTitle, icon: 'balances', enabled: true },
      { root: 'Markets', title: this.marketsTitle, icon: 'markets', enabled: true },
      { root: 'Discover', title: this.discoverTitle, icon: 'discover', enabled: false },
      { root: 'Profile', title: this.profileTitle, icon: 'profile', enabled: true }
		]
  }

  selectTab () {
    const selectedTab = this.tabRef.getSelected()
    this.tabRef.getAllChildNavs().forEach(tab => {
			this.trs.get('TABS').subscribe(
				TBAS => tab.tabTitle = (tab === selectedTab)
          ? ''
          : TBAS[this[tab.tabIcon + 'Title']]
			)
    })
  }
}
