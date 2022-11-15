import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-pipe',
  templateUrl: './component-pipe.component.html',
})
export class ComponentPipe {
  @Input() date!: string;

  @Output() clicked = new EventEmitter<string>();

  onClick(value: string) {
    this.clicked.emit(value);
  }
}
