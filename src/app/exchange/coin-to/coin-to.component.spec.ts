import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinToComponent } from './coin-to.component';

describe('CoinToComponent', () => {
  let component: CoinToComponent;
  let fixture: ComponentFixture<CoinToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
