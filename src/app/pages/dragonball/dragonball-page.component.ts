import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonBallPageComponent {
  public name = signal<string>('');
  public power = signal<number>(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
    // { id: 3, name: 'Yamcha', power: 500 },
  ]);

  // public powerClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });

  public addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  private resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
