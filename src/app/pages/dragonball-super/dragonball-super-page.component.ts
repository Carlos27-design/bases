import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuperPageComponent {
  private dragonballService = inject(DragonballService);

  public getCharacters() {
    return this.dragonballService.characters();
  }

  public addCharacter(newCharacter: Character) {
    this.dragonballService.addCharacter(newCharacter);
  }
}
