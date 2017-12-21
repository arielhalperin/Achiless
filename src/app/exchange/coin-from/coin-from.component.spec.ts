import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinFromComponent } from './coin-from.component';

describe('CoinFromComponent', () => {
  let component: CoinFromComponent;
  let fixture: ComponentFixture<CoinFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
