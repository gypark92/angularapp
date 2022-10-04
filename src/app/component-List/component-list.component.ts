import { Component, Input } from '@angular/core';

import { ListService } from './list.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['../app.component.css'],
  // providers: [ListService],
})
export class ComponentList {
  @Input() data!: string[];

  constructor() {
    // listService: ListService
    // this.items = listService.getItem();
  }
}
