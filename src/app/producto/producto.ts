import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class ProductoComponent {
  @Input() producto!: Producto

  constructor(private productoService: ProductoService) {}

  emitirDetalleProducto(producto: Producto) {
    this.productoService.detalleProductoEmitter.emit(this.producto);
  }
}
