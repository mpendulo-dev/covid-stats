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
    infected: number = 0;
    deaths: number;
    recovered: number;
    tested: number;
    flag: string[] = [];
    date: Date;

  constructor(private apiService: CovidApiService, private country: CountriesService) { }

  ngOnInit(): void {
    
    this.apiService.getData().subscribe(data => {

      console.log(data);
      this.covidCountryData = data;

      this.totalLength = this.covidCountryData.length;

      for(let i = 0; i < this.covidCountryData.length; i++) {

        this.infected += this.covidCountryData[i].infected;
       console.log(typeof(this.covidCountryData[i].infected));

        // assign country name
        this.countryName[i] = this.covidCountryData[i].country;


      }
        console.log(`infected ${this.infected}`);
    });
    this.country.getCountries().subscribe(data => {

        console.log(data);
        
        // if(this.countryName)
        let size = (Object.keys(data).length -1);
    
        
        // get flag
        for(let i = 0; i < size; i++) {
          // console.log(this.countryName[i]);
      
          // console.log(typeof(data[i].name));
          // console.log(JSON.stringify(this.countryName[i]));
          // console.log(JSON.stringify(data[i].name));

          // console.log(this.covidCountryData[i].country);
          // console.log(data[i].name);
          // if(this.covidCountryData[i].country === data[i].name) {
          //   console.log('object');
          // }
        }
    });
  }

}
