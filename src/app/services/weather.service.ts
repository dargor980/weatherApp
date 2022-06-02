import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NextDays, Weather } from '../models/weather.model';
import { tap } from 'rxjs';
import conditions from 'src/app/models/weather_conditions.json';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = environment.API_KEY;
  private apiUrl = environment.API_URL;
  Conditions:any = conditions;
  constructor(
    private http: HttpClient
  ) { }

  getCurrentWeather(query: string){
    return this.http.get<Weather>(`${this.apiUrl}current.json?key=${this.apiKey}&q=${query}`)
    .pipe(
      tap(data => {
        if(data.current.is_day){

          data.current.condition.text = this.Conditions.filter((condition: { code: number; day: string, night: string, icon: number }) => condition.code === data.current.condition.code)[0].day;
        } else {
          data.current.condition.text = this.Conditions.filter((condition: { code: number; day: string, night: string, icon: number }) => condition.code === data.current.condition.code)[0].night;
        }
        data.current.condition.icon = this.Conditions.filter((condition: { code:number; day: string; nigth: string; icon: number}) => condition.code === data.current.condition.code)[0].icon;
      })
    );
  }

  getForecastWeather(query: string){
    return this.http.get<NextDays[]>(`${this.apiUrl}forecast.json?key=${this.apiKey}&q=${query}&days=5&aqi=no&alerts=no`);
  }

}
