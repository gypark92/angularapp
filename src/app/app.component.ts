import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';

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
  log: string = '';

  val: string = '';


  changeItem(value: string) {
    this.item = value;
  }
  updateItem2(item2:string) {
 this.item2 = item2
  }
  appendText(value: string) {
    this.log = this.log + value;
  }
  clickText (value:string){
    this.val = value;
  }
  removeText(value:string){
    // this.val = value.toUpperCase(); //대문자 
    
  this.val =  "";
  console.log(this.val)
  }
}
