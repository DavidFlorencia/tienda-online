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
  
  productId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      const producto = this.productoService.getProductoById(Number(id)); 
      if (producto){
        this.productId = producto.id;
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

    const producto = new Producto(this.productId, this.descripcionInput, this.precioInput);
    this.productoService.guardarProducto(producto);

    this.limpiarFormulario()
    this.cancelar()
  }

  cancelar(){
    this.router.navigate(['/'])
  }

  eliminarProducto(){
    if (this.productId !== null){
      this.productoService.eliminarProducto(this.productId);
      this.limpiarFormulario();
      this.cancelar();
    }
  }

  limpiarFormulario(){
    this.productId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
