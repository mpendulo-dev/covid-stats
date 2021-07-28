import { CovidApiService } from '../../services/covid-service/covid-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.css']
})
export class StatsCardsComponent implements OnInit {

  // Total infections
  totalCases: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;
  countryData;
  constructor(private apiService: CovidApiService) { }

  ngOnInit(): void {

    // Get total infections,recoveries, and number of deaths
    this.apiService.getData().subscribe(data => {

      // store data from API to variable
        this.countryData = data;

        // Iterating through the stats to get totals
        for(let i = 0; i < this.countryData.length; i++) {

          // total number of cases
          this.totalCases += this.countryData[i].cases;
          
          // total number of recovered patients
          this.totalRecovered += this.countryData[i].recovered;

          // total number of deaths
          this.totalDeaths += this.countryData[i].deaths;
        }
    });

  }

}
