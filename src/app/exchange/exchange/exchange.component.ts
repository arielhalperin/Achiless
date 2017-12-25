import {Component, OnInit} from '@angular/core';
import {ExchangeService} from "../shared/exchange.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'achiless-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  coins = [] ;
  fromCurrency;
  toCurrency;
  fromAmount = 1;
  toAmount = 1;

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getMarketCap().subscribe( coins => {
      for (let coin of coins){
        if (coin.symbol.toLowerCase() === 'btc') {
          this.fromCurrency = coin;
        }

        if (coin.symbol.toLowerCase() === 'eth') {
          this.toCurrency = coin;
        }
      }

      this.coins = coins;//this.createCoinsSelectedItemArray(coins);
      this.toAmount = this.exchangeService.calculateAmount(this.fromCurrency, this.toCurrency, this.fromAmount);
    });

    this.exchangeService.amountIsChanged.subscribe((amount) => {
      this.fromAmount = amount;
      this.toAmount = this.exchangeService.calculateAmount(this.fromCurrency, this.toCurrency, amount);
    });

    this.exchangeService.currencyIsChanged.subscribe((currency) => {
      this[currency.exchangeSide] = currency.currency;
      this.toAmount = this.exchangeService.calculateAmount(this.fromCurrency, this.toCurrency, this.fromAmount);

    });
  }

  switchCurrencies() {
    const tempCurrency = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = tempCurrency;
    this.toAmount = this.exchangeService.calculateAmount(this.fromCurrency, this.toCurrency, this.fromAmount);
  }

  createCoinsSelectedItemArray(coins) {
    const parsedCoins: SelectItem[] = [];
    for (let coin of coins) {
      parsedCoins.push({
        label: coin.name + " (" + coin.symbol + ")",
        value: coin.symbol
      });
    }

    return parsedCoins;
  }
}
