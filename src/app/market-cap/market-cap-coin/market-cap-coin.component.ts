import {Component, Input, OnInit} from '@angular/core';
import {MarketCapCoin} from "../shared/market-cap-coin";

@Component({
  selector: 'achiless-market-cap-coin',
  templateUrl: './market-cap-coin.component.html',
  styleUrls: ['./market-cap-coin.component.css']
})
export class MarketCapCoinComponent implements OnInit {

  @Input() marketCapCoin: MarketCapCoin;
  coinProfitClass;
  constructor() { }

  ngOnInit() {
    this.coinProfitClass = this.marketCapCoin.percent_change_24h > 0 ? "profit" :
      this.marketCapCoin.percent_change_24h < 0 ? "loss" : "even";
  }

}
