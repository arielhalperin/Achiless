import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

@Injectable()
export class ExchangeService {

  marketCap = null;

  constructor(private http: HttpClient) { }
  amountIsChanged = new EventEmitter();
  currencyIsChanged = new EventEmitter();


  getMarketCap(limit = 10) {
    try {
      if (this.marketCap) {
        return Observable.of(this.marketCap);
      }

      // return this.http.get(environment.ServerUrl);
      return this.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        .map((response) => {
        this.marketCap = response;
          return response;
        })
        .catch((error: Response) => {
          return Observable.throw(error);
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  amountChange(amount) {
    this.amountIsChanged.emit(amount);
  }

  currencyChange(currency) {

    this.currencyIsChanged.emit(currency);
  }

  calculateAmount(fromCurrency, toCurrency, fromAmount) {
    return fromCurrency.price_usd / toCurrency.price_usd * fromAmount;
  }

  performTransaction(fromCurrency, toCurrency, amount) {
    const transaction = {
      "fromCurrency": fromCurrency.symbol,
      "toCurrency": toCurrency.symbol,
      "amount": amount,
      "amount_usd": fromCurrency.price_usd * amount,
      "amount_btc": fromCurrency.price_btc * amount,
    };
    return this.http.post(environment.ServerUrl + '/transaction', transaction).map((response: Response) => {
      const result = response;

      return result;
    })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }
}
