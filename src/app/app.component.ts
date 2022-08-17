import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bit-weather';
  weatherData: any;
  city : string = 'London';
  apik = "3045dd712ffe6e702e3245525ac7fa38";


  constuctor() {
    console.log('this is construct');
  }

  ngOnInit() {
    alert('hello');
    this.getWeatherData('London');
  }

  getWeatherData(city: string) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      this.apik
    )
      .then((res) => res.json())

      .then((data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      })

      .catch((err) => alert("You entered WRONG city name !!!"));
  }

  onChange($event : any) {
    console.log('this is onChange');
    console.log(this.city);
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.
  }

}
