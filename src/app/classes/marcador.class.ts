export class Marcador {

    public lat:number;
    public lng: number;

    public titulo:string = 'Sin Titulo';
    public desc: string ='Sin descripcion';

    constructor(lat:number, lng: number){
        this.lat = lat;
        this.lng = lng;

        /*this.titulo = 'Sin Titulo';
        this.desc = 'Sin descripcion';*/
    }

}