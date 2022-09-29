export class ListService {
  items: string[];
  constructor() {
    this.items = ['banana', 'apple', 'melon'];
  }

  getItem() {
    return this.items;
  }
}
