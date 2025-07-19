import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  descripcion: string = 'Producto de ejemplo';
  precio: number = 100;
}
