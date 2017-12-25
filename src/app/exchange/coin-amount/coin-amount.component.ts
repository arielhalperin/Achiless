import {Component, Input, OnInit} from '@angular/core';
import {ExchangeService} from "../shared/exchange.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'achiless-coin-amount',
  templateUrl: './coin-amount.component.html',
  styleUrls: ['./coin-amount.component.css'],
})
export class CoinAmountComponent implements OnInit {


  @Input() amount;
  @Input() selectedCoin;
  @Input() coins = [];
  @Input() disabled: boolean;
  @Input() exchangeSide;

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
  }

  onCoinChange() {
    const currencyObj = {
      "currency" : this.selectedCoin,
      "exchangeSide" : this.exchangeSide
    };
    this.exchangeService.currencyChange(currencyObj);
  }

  onAmountChange(amount) {

    this.exchangeService.amountChange(amount);
  }

  searchCoins(event) {

    // console.log(this.exchangeService.getMarketCap());
    // const parsedCoins = [];
    // for (let coin of this.exchangeService.getMarketCap()){
    //       if (coin.symbol.indexOf(query) !== -1 || coin.name.indexOf(query) !== -1) {
    //         parsedCoins.push({
    //           label: coin.name + " (" + coin.symbol + ")",
    //           value: coin.symbol
    //         });
    //       }
    // }
    //
    // this.results = parsedCoins;
    const query = event.query;
    this.exchangeService.getMarketCap().subscribe( coins => {
      const filterCoins = [];

      for (let coin of coins) {
        if (coin.symbol.toLowerCase().indexOf(query) !== -1 || coin.name.toLowerCase().indexOf(query) !== -1) {
          filterCoins.push(coin);
        }
      }

      this.coins = filterCoins;
    });
  }

}
