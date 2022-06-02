import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-today-status',
  templateUrl: './today-status.component.html',
  styleUrls: ['./today-status.component.scss']
})
export class TodayStatusComponent implements OnInit {

  @Input() gradeSystem: string = 'celsius';
  date: string = new Date().toString();
  @Input() weather: Weather = {
    location:{
      name: '',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: '',
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: 'string',
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
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
    console.log("today-status", this.weather)
  }
  
}
