import { Component } from '@angular/core';

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['../app.component.css'],
})
export class ComponentInput {
  item: string = '';
  item2: string = '';

  onChange(item: Event) {
    this.item = (item?.target as HTMLInputElement).value;
  }
}
