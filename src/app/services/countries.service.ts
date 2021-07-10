import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countryAPI = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) { }

  // countries API method
  getCountries() {
    return this.http.get(this.countryAPI);
  }
}
