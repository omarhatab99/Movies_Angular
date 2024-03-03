import { Component } from '@angular/core';

@Component({ //decorator contain meta data for component.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //app component
  title = 'angularW3_Project';
}
