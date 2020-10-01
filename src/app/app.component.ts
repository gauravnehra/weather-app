import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  location: String;
  currentTemp: Number;
  max: Number;
  min: Number;
  feelsLike: Number;
  humidity: String;

  ngOnInit() {}

  getWeather(loc: String) {
    let apiKey = 'bb0e41f13e28d2be2fed00314d710dee';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;

    var obj = fetch(url);
    obj
      .then((response) => {
        response
          .json()
          .then((data) => {
            this.location = loc;
            this.currentTemp = data.main.temp;
            this.max = data.main.temp_max;
            this.min = data.main.temp_min;
            this.feelsLike = data.main.feels_like;
            this.humidity = data.main.humidity;
          })
          .catch((err) => {
            console.log('JSON format not valid..');
          });
      })
      .catch((err) => {
        console.log('Server Error..');
      });
  }
}
