import { Component } from '@angular/core';
import { Producto } from "../producto/producto";

@Component({
  selector: 'app-listado-productos',
  imports: [Producto],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

}
