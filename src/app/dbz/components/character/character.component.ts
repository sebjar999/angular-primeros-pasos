import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()//decorar para poder emitir hijo a padre
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //vaamos a emitir un personaje(objeto)

  public character: Character = {
    name: '',
    power: 0
  };

  emitcharacter(): void {

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    /* console.log(this.character.name);
    console.log(this.character.power); */
    this.character.name = '';
    this.character.power = 0;
  }
}
