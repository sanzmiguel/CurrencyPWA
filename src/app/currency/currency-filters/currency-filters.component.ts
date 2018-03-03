import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency-service.service';

@Component({
  selector: 'app-currency-filters',
  templateUrl: './currency-filters.component.html',
  styleUrls: ['./currency-filters.component.css']
})
export class CurrencyFiltersComponent implements OnInit {

  currencies: Object;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrenciesList().subscribe(
      data => this.currencies = data['currencies'],
      err => console.error(err)
    );
  }

}
