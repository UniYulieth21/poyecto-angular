import { Component, HostBinding } from '@angular/core';
import { NgFor } from '@angular/common';

interface Tarea {
  nombre: string;
  descripcion: string;
  prioridad: string;
}

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class ListadoComponent {
  titulo: string = 'Lista de Tareas';

  @HostBinding('class') hostClass = 'd-block';

  tareas: Tarea[] = [
    { nombre: 'Estudiar Angular', descripcion: 'Repasar componentes y directivas', prioridad: 'Alta' },
    { nombre: 'Practicar Bootstrap', descripcion: 'Usar grillas y utilidades de Bootstrap', prioridad: 'Alta' },
    { nombre: 'Hacer ejercicio', descripcion: 'Salir a correr 30 minutos', prioridad: 'Media' },
    { nombre: 'Leer un libro', descripcion: 'Continuar con la lectura del mes', prioridad: 'Baja' }
  ];

  agregar(nombre: HTMLInputElement, descripcion: HTMLInputElement, prioridad: HTMLSelectElement): void {
    if (!nombre.value.trim() || !descripcion.value.trim()) {
      return;
    }

    this.tareas.push({
      nombre: nombre.value.trim(),
      descripcion: descripcion.value.trim(),
      prioridad: prioridad.value
    });

    nombre.value = '';
    descripcion.value = '';
    prioridad.value = 'Media';
  }

  getPrioridadClase(prioridad: string): string {
    if (prioridad === 'Alta') return 'danger';
    if (prioridad === 'Media') return 'warning';
    return 'secondary';
  }
}
