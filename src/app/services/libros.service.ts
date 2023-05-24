import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  BACKEND_URL:string = environment.BACKEND_URL;

  constructor(private peticion:HttpClient) { }

  getLibros():Observable<Libro[]> {

    const headers = new HttpHeaders()
    .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcmlzdGhpYW5AZ21haWwuY29tIiwiZXhwIjoxNjg2NzgyMDU2LCJub21icmUiOiJjcmlzdGhpYW4ifQ.bnSlSOryVd9fPeB9duSmjx3bJURe6lP3-fAIuOuVRVU");
    return this.peticion.get<Libro[]>(this.BACKEND_URL + "/api/v1/libros", {headers});
  }
}
