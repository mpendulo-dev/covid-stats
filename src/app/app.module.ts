import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';

// pagination module
import {NgxPaginationModule} from 'ngx-pagination';

// Piper
import { FormsModule } from '@angular/forms';
import { CountryFilterPipe } from './components/main-content/country-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    StatsCardsComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
