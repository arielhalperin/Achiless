import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCapContainerComponent } from './market-cap-container.component';

describe('MarketCapContainerComponent', () => {
  let component: MarketCapContainerComponent;
  let fixture: ComponentFixture<MarketCapContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCapContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
