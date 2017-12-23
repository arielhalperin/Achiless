import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../shared/exchange.service";

@Component({
  selector: 'achiless-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.amountIsChanged.subscribe((amount) => {
      console.log("exchange:" + amount);
    });

    this.exchangeService.currencyIsChanged.subscribe((currency) => {
      console.log("exchange:" + currency);
    });
  }


}
