import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import {ExchangeModule} from "../exchange/exchange.module";
import {MarketCapModule} from "../market-cap/market-cap.module";

@NgModule({
  imports: [
    CommonModule,
    ExchangeModule,
    MarketCapModule
  ],
  declarations: [ContactUsComponent, AboutUsComponent, HomeComponent]
})
export class PagesModule { }
