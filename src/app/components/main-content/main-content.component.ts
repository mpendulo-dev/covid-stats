import { CovidApiService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  // API data
  covidCountryData;
  constructor(private apiService: CovidApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {

      console.log(data);
      this.covidCountryData = data;
    });
  }

}
