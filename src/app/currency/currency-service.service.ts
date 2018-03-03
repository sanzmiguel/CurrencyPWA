import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyService {

  url = 'http://apilayer.net/api/list?access_key=5d0e7747e97f157559f01c22eb4736c6';

  constructor(private http: HttpClient) { }

  getCurrenciesList() {
    return this.http.get(this.url);
  }

}
