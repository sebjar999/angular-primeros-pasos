import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name = 'Ironman';
  age = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Batman';
  }
  changeAge(age: number) {
    this.age = age;
  }

  resetForm() {
    this.name = 'Ironman';
    this.age = 45;

  /*   document.querySelector('h1')!.array.forEach(element => {
      element.innerHTML = '<h1> desde angular </h1>';
    }); */
  }

}
