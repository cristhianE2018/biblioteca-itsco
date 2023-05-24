import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/Alumno.model';
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  BACKEND_URL:string = environment.BACKEND_URL;

  constructor(private peticion:HttpClient) { }

  getAlumnos():Observable<Alumno[]> {

    const headers = new HttpHeaders()
    .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcmlzdGhpYW5AZ21haWwuY29tIiwiZXhwIjoxNjg2NzgyMDU2LCJub21icmUiOiJjcmlzdGhpYW4ifQ.bnSlSOryVd9fPeB9duSmjx3bJURe6lP3-fAIuOuVRVU");
    return this.peticion.get<Alumno[]>(this.BACKEND_URL + "/api/v1/alumnos", {headers});
  }
}
