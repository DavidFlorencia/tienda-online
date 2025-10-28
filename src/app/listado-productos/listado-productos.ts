import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from "../producto/producto";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: {[llave:string]: Producto} = {};
  productosSubscripcion: Subscription | null = null;

  constructor(
    private productoService: ProductoService,
    private router:  Router
  ) {}

  ngOnInit() {
    this.cargarProductos();
    this.productosSubscripcion = this.productoService.productosActualizados.subscribe(
      (productos) => {
        this.productos = productos;
      }
    )
  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]: Producto})=>
    {
      this.productos = productos;
      this.productoService.setProductos(productos);
    });
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return []; 
  }

  agregarProducto(){
    this.router.navigate(['agregar'])
  }

  ngOnDestroy(): void {
    if (this.productosSubscripcion != null){
      this.productosSubscripcion.unsubscribe();
    }
  }
}
