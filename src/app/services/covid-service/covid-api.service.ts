import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  // Covid-19 api URL stored in environment variables
  covidUrl: string = environment.COVID_URL;

  constructor(private http: HttpClient) { }

  // Method that return the covid api data
  getData() {
    return this.http.get(this.covidUrl);
  }
}
