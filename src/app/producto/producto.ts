import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class ProductoComponent {
  @Input() producto!: Producto

  constructor(private router: Router) {}

  editarProducto(id: number){
    this.router.navigate(['/editar',id]);
  }
}
