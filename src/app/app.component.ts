import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  minDate = new Date(2020, 1, 1);
  maxDate = new Date(2020, 10, 1);
}
