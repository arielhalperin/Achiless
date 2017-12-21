import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../shared/exchange.service";

@Component({
  selector: 'achiless-coin-from',
  templateUrl: './coin-from.component.html',
  styleUrls: ['./coin-from.component.css']
})
export class CoinFromComponent implements OnInit {

  coins;
  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getMarketCap().subscribe( coins => {
      this.coins = coins;
    });
  }

}
