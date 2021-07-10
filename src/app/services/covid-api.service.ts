import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  // Covid-19 api URL
  covidUrl = 'https://pomber.github.io/covid19/timeseries.json';
  constructor(private http: HttpClient) { }

  // Method that return the covid api data
  getData() {
    return this.http.get(this.covidUrl);
  }
}
