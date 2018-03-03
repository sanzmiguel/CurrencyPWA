import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { CurrencyFiltersComponent } from './currency/currency-filters/currency-filters.component';
import { CurrencySelectorComponent } from './currency/currency-selector/currency-selector.component';

import { CurrencyService } from './currency/currency-service.service';

@NgModule({
  declarations: [AppComponent, CurrencyFiltersComponent, CurrencySelectorComponent],
  imports: [FormsModule, BrowserModule, BrowserAnimationsModule, MatToolbarModule, HttpClientModule, MatSelectModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
