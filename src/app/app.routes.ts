import { Routes } from '@angular/router';
import { ListadoProductos } from './listado-productos/listado-productos';
import { Formulario } from './formulario/formulario';
import { Error } from './error/error';

export const routes: Routes = [
    {path:'', component: ListadoProductos},
    {path:'listado', component: ListadoProductos},
    {path:'agregar', component: Formulario},
    {path:'editar/:id', component: Formulario},
    {path: '**', component: Error}
];
