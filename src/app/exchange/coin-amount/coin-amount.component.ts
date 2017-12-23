import {Component, Input, OnInit} from '@angular/core';
import {ExchangeService} from "../shared/exchange.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'achiless-coin-amount',
  templateUrl: './coin-amount.component.html',
  styleUrls: ['./coin-amount.component.css']
})
export class CoinAmountComponent implements OnInit {

  coins: SelectItem[] = [];
  selectedCoin;
  cities2;
  amount = 1;
  @Input() disabled: boolean;

  constructor(private exchangeService: ExchangeService) {

  }

  ngOnInit() {
    this.exchangeService.getMarketCap().subscribe( coins => {
      for (let coin of coins){
        this.coins.push({
          label: coin.name + " (" + coin.symbol + ")",
          value: coin.symbol
        });
      }
      this.selectedCoin = "BTC";

    });
  }

  onCoinChange(coin) {
    console.log(coin);
    this.exchangeService.currencyChange(coin);
  }

  onAmountChange(amount) {
    this.exchangeService.amountChange(amount);
  }

}
