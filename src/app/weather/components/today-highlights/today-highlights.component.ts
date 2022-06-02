import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Current } from 'src/app/models/weather.model';

@Component({
  selector: 'app-today-highlights',
  templateUrl: './today-highlights.component.html',
  styleUrls: ['./today-highlights.component.scss']
})
export class TodayHighlightsComponent implements OnInit {


  @Input() unitSystem: string = 'metric';

  @Input() currentStatus: Current = {
    last_updated_epoch: 0,
    last_updated: '',
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: '',
      icon: '',
      code: 0
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: '',
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
