import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  data1: string[] = ['banana', 'apple'];
  item: string = '';
  item2: string = '';
  constructor() {}

  changeItem(item: Event) {
    this.item = (item?.target as HTMLInputElement).value;
    console.log(this.item);
  }
  updateItem(item2:string) {
 this.item2 = item2
  }
}
