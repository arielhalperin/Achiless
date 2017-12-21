import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange/exchange.component';
import { CoinFromComponent } from './coin-from/coin-from.component';
import { CoinToComponent } from './coin-to/coin-to.component';
import {DropdownModule} from "primeng/primeng";
import {ExchangeService} from "./shared/exchange.service";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [ExchangeComponent, CoinFromComponent, CoinToComponent],
  providers: [ExchangeService],
  exports: [ExchangeComponent]
})
export class ExchangeModule { }
