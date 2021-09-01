import { EventData, Observable, ObservableArray, Page } from '@nativescript/core'
import { MyObservable } from './MyObservable';

let navigatingTo = (args: EventData) => {
  let page = <Page>args.object;
  //page.bindingContext = new MyObservable()    

  page.bindingContext = new ViewModel()
};
export { navigatingTo }

class Item {
  name: string;
  id: number;

  constructor(name: string) {
    this.name = name;
    this.id = new Date().getTime() * 10000 + Math.random() * 10000;//   i millisekunder, alle fik samme ms, så derfor en random oveni.
  }
}

class ViewModel extends Observable {
  public items: ObservableArray<Item>
  newItem: string = 'dwa'

  constructor() {
    super()
    this.items = new ObservableArray([
      new Item('Hans Peter'), 
      new Item('Anne Marie'), 
      new Item('Per Lenus'), 
      new Item('Niels Kristian'), 
      new Item('Jens Ole'), 
      new Item('Max Muldjord'), 
      new Item('Varme Willy'), 
      new Item('Ali Mahmoud')]);
  }

  addItem() {
    this.items.push(new Item(this.newItem));
    console.log("I addItem");
  }
}
