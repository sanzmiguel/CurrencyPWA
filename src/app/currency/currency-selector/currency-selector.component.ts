import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit, OnChanges {
  @Input() currencies: Object;
  selectedCurrency: string;
  currenciesSymbols: string[];

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.currencies) {
      this.currenciesSymbols = Object.keys(this.currencies);
    }
  }

  doSomething(event) {
    console.log(event);
  }

}
