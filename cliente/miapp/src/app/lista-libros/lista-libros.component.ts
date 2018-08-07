import { Component, OnInit } from '@angular/core';
import { LibroRESTResourceService } from '../servicios/libro-restresource.service';
import { Libro } from '../negocio/libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaLibros:Libro[]=[];
  
  constructor(private servicioREST:LibroRESTResourceService,private router:Router) {

      servicioREST.findAll().then((libros:Libro[])=>{

        this.listaLibros=libros as Libro[];
      })


   }

  ngOnInit() {
  }

  nuevo(){
    

    this.router.navigate(['libros/formulario']);
  }

}
