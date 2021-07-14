import { CovidApiService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.css']
})
export class StatsCardsComponent implements OnInit {

  // Total infections
  totalInfections: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;
  countryData;
  constructor(private apiService: CovidApiService) { }

  ngOnInit(): void {

    // Get total infections,recoveries, and number of deaths
    this.apiService.getData().subscribe(data => {

      this.countryData = data;

      for(let i = 0; i < this.countryData.length; i++){

        // total infections
        this.totalInfections += this.countryData[i].infected;

        // total recoveries - Condtion for null recovered data
  
        if(this.countryData[i].recovered == 'NA') {

          this.countryData[i].recovered = 0;
        }

        this.totalRecovered += this.countryData[i].recovered;

        // total number of deaths

        if(this.countryData[i].deceased == 'NA') {

          this.countryData[i].deceased = 0;
        }

        this.totalDeaths += this.countryData[i].deceased;
      }
      
    });
  }

}
