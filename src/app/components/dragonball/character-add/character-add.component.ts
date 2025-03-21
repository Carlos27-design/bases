import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  public name = signal<string>('');
  public power = signal<number>(0);

  newCharacter = output<Character>();

  public addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  private resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
