import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  // Covid-19 api URL
  covidUrl = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';
  constructor(private http: HttpClient) { }

  // Method that return the covid api data
  getData() {
    return this.http.get(this.covidUrl);
  }
}
