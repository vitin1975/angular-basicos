import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitán América'];
  copyHeroes: string[] = [];
  heroeBorrado : string = '';
  constructor() { 
    console.log('constructor');
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('borrando...' + this.heroeBorrado);
  }

  mueveHeroes() { //--Si actualizas un array que se pinta en pantalla, automáticamente cambiará por pantalla
    this.copyHeroes = [];
    let i = this.heroes.length;
    let j = 0;
    this.heroes.forEach((heroe) => {
      if (j==0) {
        this.copyHeroes[j] = this.heroes[i-1];
      } else {
        this.copyHeroes[j] = this.heroes[j-1];
      }
      j++;
    })
    this.heroes = this.copyHeroes;

  }

}
