import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from "../producto/producto";
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {

    this.productoService.detalleProductoEmitter.subscribe(
      (producto: Producto) => {
        alert("Producto seleccionado: " + producto.descripcion);
      }
    );

  }

  ngOnInit() {
    this.productos = this.productoService.productos;
  }
}
