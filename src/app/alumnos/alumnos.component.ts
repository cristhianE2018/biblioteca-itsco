import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno.model';
import { AlumnosService } from '../services/alumnos.service';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  //Crear el servicio AlumnosService
  //para consumir de la API
  constructor(private aluServicio: AlumnosService){ }

  ngOnInit(): void {
      this.aluServicio.getAlumnos().subscribe(
        lista => { this.alumnos = lista; }
      )
  }
}
