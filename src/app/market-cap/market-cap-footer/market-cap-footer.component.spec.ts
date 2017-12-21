import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCapFooterComponent } from './market-cap-footer.component';

describe('MarketCapFooterComponent', () => {
  let component: MarketCapFooterComponent;
  let fixture: ComponentFixture<MarketCapFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCapFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCapFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
