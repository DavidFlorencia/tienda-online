import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { Datos } from './datos';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave:string]: Producto} = {};
  productosActualizados = new Subject<{[llave:string]: Producto}>

  constructor(private datosService: Datos){}

  listarProductos(){
    return this.datosService.listarProductos()
  }

  guardarProducto(producto: Producto, llave: string | null) {
    if (llave === null){
      // Agregar
      this.datosService.guardarProducto(producto).subscribe(
        () => {
          this.refrescarProductos();
        }
      )
    }else{
      this.datosService.modificarProducto(producto, llave).subscribe(
        () => {
          this.refrescarProductos();
        });
    }
  }

  private refrescarProductos(){
    this.listarProductos().subscribe(
      (productos: {[llave:string]: Producto}) => {
        this.setProductos(productos)
      }
    )
  }

  setProductos(productos: {[llave:string]: Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos);
  }

  getProductoByLlave(llave: string): Producto | undefined{
    return this.productos[llave];
  }

  eliminarProducto(llave: string){
    this.datosService.eliminarProducto(llave).subscribe(
      () => {
        this.refrescarProductos();
      }
    );
  }
}