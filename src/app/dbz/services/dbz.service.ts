import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';//generar id


import { Character } from '../interfaces/character.interface';
@Injectable({
  providedIn: 'root'/*  el servicio hace un singleton en todo el proyecto (se podra utilizar por dependencias )*/
})
export class DbzService {

  public characters: Character[] =[{
    id: uuid(),
    name: 'krillin',
    power:1000
  },{
    id: uuid(),
    name: 'Goku',
    power:9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power:9200
  }
];

addCharacter(character: Character):void{
  const newCharacter: Character= { id: uuid(), ...character  }//tomar todas las propiedas del character y espacirlas en este nuevo objeto
  let copiaCharacter=Object.assign({},newCharacter)//se crea una copia superficial y utiliza todos los valores del objeto y crea uno nuevo
  this.characters.push(copiaCharacter);

}

/* onDeleteCharacter(id: number):void{
  this.characters.splice(id,1);
} */

deleteCharacterByid(id:string){
  this.characters= this.characters.filter(character=> character.id !== id);
}

}
