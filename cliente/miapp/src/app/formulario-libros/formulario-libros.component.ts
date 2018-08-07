import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { LibroRESTResourceService } from '../servicios/libro-restresource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-libros',
  templateUrl: './formulario-libros.component.html',
  styleUrls: ['./formulario-libros.component.css']
})
export class FormularioLibrosComponent implements OnInit {

  libro:Libro= new Libro();
  constructor(private miservicio:LibroRESTResourceService,private router:Router) {



   }

  ngOnInit() {
  }

  insertar() {

    this.miservicio.insert(this.libro).then((datos)=> {

          this.router.navigate(["libros/listado"]);

    })
  }

}
