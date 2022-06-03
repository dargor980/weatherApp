import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherRoutingModule } from './weather-routing.module';
import { TodayStatusComponent } from './components/today-status/today-status.component';
import { TodayHighlightsComponent } from './components/today-highlights/today-highlights.component';
import { NextDaysComponent } from './components/next-days/next-days.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
 

@NgModule({
  declarations: [
    TodayStatusComponent,
    TodayHighlightsComponent,
    NextDaysComponent,
    LayoutComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class WeatherModule { }
