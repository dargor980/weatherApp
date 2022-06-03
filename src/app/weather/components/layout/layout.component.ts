import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from 'src/app/services/location.service';
import { Weather } from 'src/app/models/weather.model';
import conditions from 'src/app/models/weather_conditions.json';
import cities from 'src/app/models/cities.json';
import { first, pipe, startWith } from 'rxjs';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  unitSystem: string = 'metric';
  gradeSystem: string = 'celsius';
  activeCelsius: boolean = true;
  activeFahrenheit: boolean = false;
  myLocation: string = '';
  showSearch: boolean = true;

  currentWeather: Weather ={
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

  conditions: any = conditions;

  Cities: any = cities;


  constructor(
    private weatherService: WeatherService,
    private location: LocationService
  ) { }

  ngOnInit(): void {
    this.getLocation();
    console.log(this.Cities.cities[0].name);
  }

  getCurrentWeather(position: string){
    this.weatherService.getCurrentWeather(position)
    .subscribe((data) => {
      this.currentWeather = data;
    });
  }
  toggleUnitSystem(){
    this.unitSystem = this.unitSystem === 'metric' ? 'imperial' : 'metric';
  }

  toggleGradeSystem(system: string){
    this.gradeSystem = system;
    if(system === 'fahrenheit'){
      this.activeCelsius = false;
      this.activeFahrenheit = true;
    } else {
      this.activeCelsius = true;
      this.activeFahrenheit = false;
    }
    console.log(this.activeCelsius, this.activeFahrenheit);
  }

  getLocation(){
    this.location.getPosition()
    .then(pos => {
      this.myLocation = pos.lat + ',' + pos.lng;
      this.getCurrentWeather(this.myLocation);
      console.log("aaaa")
    })
    .catch(err => {
      console.log(err);
      this.myLocation = 'santiago';
      this.getCurrentWeather(this.myLocation);
    });
  }

  toggleSearchComponent(){
    this.showSearch = !this.showSearch;
  }
    
  


}
