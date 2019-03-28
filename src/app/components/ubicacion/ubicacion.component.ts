import { Component } from '@angular/core';

@Component({
    selector: 'ubicacion',
    templateUrl: './ubicacion.component.html',
    styleUrls: ['./ubicacion.component.css']
})

export class UbicacionComponent {
    public nombre: string;
    public zona: number;
    public descripcion: string;
    public encargado: string;
    public abierto: boolean;

    constructor(){
        this.nombre = 'Tienda 1'
        this.zona = 18;
        this.descripcion = 'En el limon';
        this.encargado = 'Donovan'
        this.abierto = true;    
    }
}