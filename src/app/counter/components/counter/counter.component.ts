import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;
  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 0;
  }
}
