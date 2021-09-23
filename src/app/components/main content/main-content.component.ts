import { CovidApiService } from '../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

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

  constructor(private apiService: CovidApiService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCountryData();
  }

  //get api data
  getCountryData() {
    this.apiService.getData().subscribe(data => {


      // API response data
      this.covidCountryData = data;

      // length of API array
      this.totalLength = this.covidCountryData.length;

      for( let key in this.covidCountryData) {

        if (this.covidCountryData[key].country) {

          this.countryName[key] = this.covidCountryData[key].country;
          this.infected = this.covidCountryData[key].cases;
          this.recovered = this.covidCountryData[key].recovered;
          this.deaths = this.covidCountryData[key].deaths;
          this.flag = this.covidCountryData[key].countryInfo.flag;

        }
      }
    },
    (error) => {
      //catch errors, either when api doesn't return data.
      this.toastr.error('Please try again later', 'Something went wrong!');
    });

  }

}
