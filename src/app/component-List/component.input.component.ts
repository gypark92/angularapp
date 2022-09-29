import { Component, Input, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['../app.component.css'],
})
export class ComponentInput implements OnInit {
  @Input()
  item: string | undefined;
  item2: string | undefined;

  ngOnInit() {
    this.item = '';
    this.item2 = '';
    console.log('ok?');
  }

  onChange(item: Event) {
    this.item = (item?.target as HTMLInputElement).value;
  }
}
