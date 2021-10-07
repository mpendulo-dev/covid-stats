import { Country } from './../models/country.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  
   // Covid-19 api URL stored in environment variables
    covidUrl: string = environment.COVID_URL;

    constructor(private http: HttpClient) { }

   // Method that return the covid api data
    getData(): Observable<Country[]> {
      return this.http.get<Country[]>(this.covidUrl);
    }
}
