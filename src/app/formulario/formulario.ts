import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService) {}

  agregarProducto(evento: Event) {
    evento.preventDefault();

    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log("Por favor, ingrese una descripción válida y un precio mayor a 0.");
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productoService.agregarProducto(producto);

    this.descripcionInput = '';
    this.precioInput = null;
  }
}
