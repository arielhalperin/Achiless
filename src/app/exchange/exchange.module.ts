import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange/exchange.component';
import {AutoCompleteModule, DropdownModule} from "primeng/primeng";
import {ExchangeService} from "./shared/exchange.service";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CoinAmountComponent } from './coin-amount/coin-amount.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [ExchangeComponent, CoinAmountComponent],
  providers: [ExchangeService],
  exports: [ExchangeComponent]
})
export class ExchangeModule { }
