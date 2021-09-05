import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroesBorrados: string[] = [];
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];

  anyadirHeroe() {
    if(this.heroesBorrados.length) {
      const indiceAleatorio: number = Math.floor(Math.random() * this.heroesBorrados.length);
      const heroeAnyadido: string = this.heroesBorrados[indiceAleatorio];
      
      this.heroes.push(heroeAnyadido);
      this.heroesBorrados.splice(indiceAleatorio, 1);
    }
  }

  borrarHeroe() {
    if(this.heroes.length) {
      const indiceAleatorio: number = Math.floor(Math.random() * this.heroes.length);
      const heroeBorrado: string[] = this.heroes.splice(indiceAleatorio, 1);

      this.heroesBorrados.push(heroeBorrado[0]);
    }
  }

}
