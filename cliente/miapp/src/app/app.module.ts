import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const rutas: Routes = [

  { path: 'libros' ,
  children: [
    {
      path: "listado",
      component: ListaLibrosComponent
    },
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(
      rutas,
      { enableTracing: true } // <-- tareas de debug
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
