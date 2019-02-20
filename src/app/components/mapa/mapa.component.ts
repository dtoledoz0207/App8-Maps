import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';

import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[] = [];

  lat:number = 19.255909;
  lng:number = -103.716782;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { 
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

    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 2000});
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();

    this.snackBar.open('Marcador eliminado', 'Cerrar', {duration: 2000});
  }

  editarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });
  }

}
