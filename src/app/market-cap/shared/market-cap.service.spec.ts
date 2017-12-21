import { TestBed, inject } from '@angular/core/testing';

import { MarketCapService } from './market-cap.service';

describe('MarketCapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketCapService]
    });
  });

  it('should be created', inject([MarketCapService], (service: MarketCapService) => {
    expect(service).toBeTruthy();
  }));
});
