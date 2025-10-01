import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from "../producto/producto";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router:  Router
  ) {}

  ngOnInit() {
    this.productos = this.productoService.productos;
  }

  agregarProducto(){
    this.router.navigate(['agregar'])
  }
}
