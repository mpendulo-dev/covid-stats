import { CountriesService } from './../../services/countries.service';
import { Covid } from './../../models/covid';
import { CovidApiService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  // pagination variables
  totalLength: any;
  page: number = 1;

  // API data
  covidCountryData;
  countryData;

  // Declare models
  countryName: string[] = [];
  infected: number[] = [];
  deaths: number[] = [];
  recovered: number[] = [];
  tested: number;
  flag: string[] = [];
  date: Date;

  constructor(private apiService: CovidApiService, private country: CountriesService) { }

  ngOnInit(): void {

    this.apiService.getData().subscribe(data => {

      // API response data
      this.covidCountryData = data;

      // length of API array
      this.totalLength = this.covidCountryData.length;

      // countries API
      this.country.getCountries().subscribe(items => {


        // Store API response
        this.countryData = items;

        for (let i = 0; i < this.totalLength; i++) {

          // country name
          this.countryName[i] = this.covidCountryData[i].country;

         if(JSON.stringify(this.countryData[i].name) === JSON.stringify(this.covidCountryData[i].country)) {

            this.infected[i] = this.covidCountryData[i].cases;
            this.recovered = this.covidCountryData[i].recovered;
            this.deaths = this.covidCountryData[i].deaths;
            this.flag[i] = this.countryData[i].flag;
        
        }
          
        }
        
        
      });



    });
  }

}
