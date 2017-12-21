import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCapContainerComponent } from './market-cap-container/market-cap-container.component';
import { MarketCapHeaderComponent } from './market-cap-header/market-cap-header.component';
import { MarketCapFooterComponent } from './market-cap-footer/market-cap-footer.component';
import {MarketCapService} from "./shared/market-cap.service";
import { MarketCapCoinComponent } from './market-cap-coin/market-cap-coin.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MarketCapContainerComponent, MarketCapHeaderComponent, MarketCapFooterComponent, MarketCapCoinComponent],
  exports: [MarketCapContainerComponent],
  providers: [MarketCapService]
})
export class MarketCapModule { }
