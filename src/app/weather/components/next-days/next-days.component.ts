import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { NextDays, Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss']
})
export class NextDaysComponent implements OnInit {

  @Input() gradeSystem: string = 'celsius';
  nextDays: NextDays[] = [];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getNextDays();
  }

  getNextDays(){
    this.weatherService.getForecastWeather('Santiago')
    .subscribe(data => {
      this.nextDays = data;
      console.log("dias",this.nextDays)
    });
  }

}
