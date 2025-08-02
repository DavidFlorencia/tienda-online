import { Component } from '@angular/core';
import { Producto } from "../producto/producto.model";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  productos: Producto[] = [
    new Producto("Pantalon", 130.0),
    new Producto("Camisa", 80.0),
    new Producto("Playera", 50.0)
  ];

  descripcionInput: string = "";
  precioInput: number | null = null;

  agregarProducto() {
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log("Por favor, ingrese una descripción válida y un precio mayor a 0.");
      return;
    }

    this.productos.push(new Producto(this.descripcionInput, this.precioInput));
    this.descripcionInput = "";
    this.precioInput = null;
  }
}
