import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  
  llaveProducto: string | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const llave = this.route.snapshot.paramMap.get('llave');
    if (llave){
      const producto = this.productoService.getProductoByLlave(llave); 
      if (producto){
        this.llaveProducto = llave;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();

    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log("Por favor, ingrese una descripción válida y un precio mayor a 0.");
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productoService.guardarProducto(producto, this.llaveProducto);

    this.limpiarFormulario()
    this.cancelar()
  }

  cancelar(){
    this.router.navigate(['/'])
  }

  eliminarProducto(){
    if (this.llaveProducto !== null){
      this.productoService.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario();
      this.cancelar();
    }
  }

  limpiarFormulario(){
    this.llaveProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
