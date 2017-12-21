import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCapCoinComponent } from './market-cap-coin.component';

describe('MarketCapCoinComponent', () => {
  let component: MarketCapCoinComponent;
  let fixture: ComponentFixture<MarketCapCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCapCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCapCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
