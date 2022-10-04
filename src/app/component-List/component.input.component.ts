import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['../app.component.css'],
})
export class ComponentInput {
  @Input()
  item!: string;
  @Input()
  item2!: string;

  onChange(item: Event) {
    this.item = (item?.target as HTMLInputElement).value;
    console.log(this.item);
  }
}
