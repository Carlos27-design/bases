import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  selector: 'counter-page',
})
export class CounterPageComponent {
  counter = 10;

  counterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  // this.counter += 1;
  //     this.counterSignal.update((current) => current + 1);
  //     console.log('Tick');
  //   }, 2000);
  // }

  public increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  public decreaseBy(value: number) {
    this.counter -= value;
    // this.counterSignal.set(this.counterSignal() - value);
    this.counterSignal.update((current) => current - value);
  }

  public resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
