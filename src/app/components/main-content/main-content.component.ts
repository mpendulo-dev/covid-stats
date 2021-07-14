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

      console.log(data);

      // API data
      this.covidCountryData = data;

      // array length
      this.totalLength = this.covidCountryData.length;

      for(let i = 0; i < this.totalLength; i++) {

        // stats
        this.infected = this.covidCountryData[0].infected;
        this.recovered = this.covidCountryData[0].recovered;
        this.deaths = this.covidCountryData[0].deceased;

        // assign country name
        this.countryName[i] = this.covidCountryData[i].country;


      }
        console.log(this.infected);
        console.log(this.countryName);
    });
    
  }

}
