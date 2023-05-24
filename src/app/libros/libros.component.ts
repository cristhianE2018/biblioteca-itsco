import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro.model';
import { LibrosService } from '../services/libros.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit{
  libros:Libro[] = [];

  constructor(private cliServicio:LibrosService) { }

  ngOnInit(): void {
      this.cliServicio.getLibros().subscribe(
        lista => { this.libros = lista; }
      );
  }

}
