import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFiltersComponent } from './currency-filters.component';

describe('CurrencyFiltersComponent', () => {
  let component: CurrencyFiltersComponent;
  let fixture: ComponentFixture<CurrencyFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
