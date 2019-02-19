import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[] = [];

  lat:number = 19.255909;
  lng:number = -103.716782;

  constructor() { 
   if(localStorage.getItem('marcadores')){
     this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
   }
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    const coords = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
  }

}
