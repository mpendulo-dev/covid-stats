import { CovidApiService } from '../../services/covid-service/covid-api.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

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

  // search
  searchTerm: string;

  constructor(private apiService: CovidApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    /*spinner starts on init */
    this.spinner.show();

    this.apiService.getData().subscribe(data => {

      // API response data
      this.covidCountryData = data;

      // end spinner
        this.spinner.hide();

      // length of API array
      this.totalLength = this.covidCountryData.length;

      
      for (let i = 0; i < this.totalLength; i++) {

        // check if country is valid and extract data
        if (this.covidCountryData[i].country) {

          this.countryName[i] = this.covidCountryData[i].country;
          this.infected = this.covidCountryData[i].cases;
          this.recovered = this.covidCountryData[i].recovered;
          this.deaths = this.covidCountryData[i].deaths;
          this.flag = this.covidCountryData[i].countryInfo.flag;

         
        }
      }
    });
  }

}
