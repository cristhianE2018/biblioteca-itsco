import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from "./libros/libros.component";
import { AlumnosComponent } from './alumnos/alumnos.component';
const routes: Routes = [
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
