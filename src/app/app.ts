import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado';
import { ListadoComponent } from './listado/listado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EncabezadoComponent, ListadoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
