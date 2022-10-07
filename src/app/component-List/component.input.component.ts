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

  constructor() {}

  @Output() Changed = new EventEmitter();
  @Output('ngModelChange') update = new EventEmitter();

  onChange(item: Event) {
    this.Changed.emit(item);
  }
  onUpdate(item2: Event) {
    this.update.emit(item2);
  }
}
