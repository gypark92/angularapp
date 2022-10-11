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

  item3='';

  aaa = '';
  constructor() {}

  @Output() changed = new EventEmitter<string>();
  @Output('item2Change') item2ChangEmitter = new EventEmitter<string>();
  @Output('item3Change') item3ChangEmitter = new EventEmitter<string>();

  onChange(event?: Event) {
    const eventValue = (event?.target as HTMLInputElement).value
    this.changed.emit(eventValue);
  }
  item2Change(item2: string) {
   this.item2ChangEmitter.emit(item2)
  }
  item3Change(){
    this.item3ChangEmitter.emit(this.item3)
  }
}
