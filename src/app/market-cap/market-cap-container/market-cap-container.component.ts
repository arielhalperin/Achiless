import { Component, OnInit } from '@angular/core';
import {MarketCapService} from "../shared/market-cap.service";

@Component({
  selector: 'achiless-market-cap-container',
  templateUrl: './market-cap-container.component.html',
  styleUrls: ['./market-cap-container.component.css']
})
export class MarketCapContainerComponent implements OnInit {


  marketCap;
  constructor(private marketCapService: MarketCapService) { }

  ngOnInit() {
    this.marketCapService.getMarketCap().subscribe( marketCap => {
      this.marketCap = marketCap;
    });
  }
}
