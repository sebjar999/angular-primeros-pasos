import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()//padre a hijo
  public characterList:Character[]=[{
    name: 'Trunk',
    power:10
  }];

  //onDelete= Index value: number;
@Output()//hijo a padre
public onDelete: EventEmitter <string>= new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if(!id)return;
    console.log({id});
    //EMITIR EL ID DEL PERSONAJE
    this.onDelete.emit(id);
  }

}
