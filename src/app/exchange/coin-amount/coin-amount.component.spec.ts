import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinAmountComponent } from './coin-amount.component';

describe('CoinAmountComponent', () => {
  let component: CoinAmountComponent;
  let fixture: ComponentFixture<CoinAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
