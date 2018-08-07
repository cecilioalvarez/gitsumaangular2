import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Libro} from "../negocio/Libro";
@Injectable({
  providedIn: 'root'
})
export class LibroRESTResourceService {

 
  constructor(private miservicio:HttpClient) { }

 
  findAll():Promise<Libro[]>{
   
    return this.miservicio
    .get<Libro[]>("http://localhost:3000/libros").toPromise();
  }
}