import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css'
})
export class EncabezadoComponent {
  titulo: string = 'Gestor de Tareas';
  descripcion: string = 'Administra tus tareas de forma sencilla';

  @HostBinding('class') hostClass = 'd-block';
}
