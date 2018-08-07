import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { FormularioLibrosComponent } from './formulario-libros/formulario-libros.component';


const rutas: Routes = [

  { path: 'libros' ,
  children: [
    {
      path: "listado",
      component: ListaLibrosComponent
    },
    {
      path: "formulario",
      component: FormularioLibrosComponent
    }
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    FormularioLibrosComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(
      rutas,
      { enableTracing: true } // <-- tareas de debug
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
