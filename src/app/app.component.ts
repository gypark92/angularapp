import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data1: string[] = ['banana', 'apple'];
  data2: string = '123';
  title = 'angular-app';
}
