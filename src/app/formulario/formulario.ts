import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event) {
    evento.preventDefault();

    if (this.descripcionInput.nativeElement.value.trim() === '' 
    || this.precioInput == null || this.precioInput.nativeElement.value <= 0) {
      console.log("Por favor, ingrese una descripción válida y un precio mayor a 0.");
      return;
    }

    const producto = new Producto(this.descripcionInput.nativeElement.value, this.precioInput.nativeElement.value);
    this.nuevoProducto.emit(producto);

    this.descripcionInput.nativeElement.value = "";
    this.precioInput.nativeElement.value = null;
  }
}
