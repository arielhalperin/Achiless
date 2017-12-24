import {Component, Input, OnInit} from '@angular/core';
import {ExchangeService} from "../shared/exchange.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'achiless-coin-amount',
  templateUrl: './coin-amount.component.html',
  styleUrls: ['./coin-amount.component.css'],
})
export class CoinAmountComponent implements OnInit {


  @Input() amount = 1;
  @Input() selectedCoin;
  @Input() coins: SelectItem[];
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

}
