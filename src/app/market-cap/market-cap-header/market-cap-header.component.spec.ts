import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCapHeaderComponent } from './market-cap-header.component';

describe('MarketCapHeaderComponent', () => {
  let component: MarketCapHeaderComponent;
  let fixture: ComponentFixture<MarketCapHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCapHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
