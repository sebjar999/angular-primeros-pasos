import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor(private dbzService:DbzService){}/* Habita todo que tiene el servicio de dbz */

get characters():Character[]{//con este get puede trar informacion del dvz services
  return [...this.dbzService.characters];//sirve para crear una copia de cada uno de los personajes que estan hay
}

onDeleteCharacter(id:string): void{
this.dbzService.deleteCharacterByid(id)
}

onNewCharacter(character:Character): void{
  this.dbzService.addCharacter(character);
}
/*   se pasa todo para utilizarce con servicios
public characters: Character[] =[{
    name: 'krillin',
    power:1000
  },{
    name: 'Goku',
    power:9500
  },{
    name: 'Vegeta',
    power:9200
  }
];

onNewCharacter(character: Character):void{
  let copiaCharacter=Object.assign({},character)//se crea una copia superficial y utiliza todos los valores del objeto y crea uno nuevo
  this.characters.push(copiaCharacter);
}

onDeleteCharacter(id: number):void{
  this.characters.splice(id,1);
} */
}
