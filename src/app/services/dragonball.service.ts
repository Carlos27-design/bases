import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');

  if (characters) {
    return JSON.parse(characters);
  }

  return [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  public characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  public addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
