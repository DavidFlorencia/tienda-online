import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from "../producto/producto";

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  productos: Producto[] = [
    new Producto("Pantalon", 130.0),
    new Producto("Camisa", 80.0),
    new Producto("Playera", 50.0)
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
