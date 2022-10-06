import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  constructor() {
    console.log(this.item2);
  }
  @Output() Changed = new EventEmitter();

  @Output('ngModelChange')
  onChange(item: Event) {
    this.Changed.emit(item);
  }
}
