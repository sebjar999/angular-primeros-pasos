import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string; //no tiene ningun valor pero es opcional
  /* public deletedHero: string=''; */

  removeLastHeroe(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
  }


}
