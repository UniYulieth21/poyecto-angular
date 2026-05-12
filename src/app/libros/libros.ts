import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AsyncPipe, NgFor } from "@angular/common";
import { Libro } from "../store/libro.model";
import { agregarLibro, eliminarLibro, votarPositivo, votarNegativo } from "../store/libros.actions";
import { FormularioLibroComponent } from "../formulario-libro/formulario-libro";

@Component({
  selector: "app-libros",
  standalone: true,
  imports: [AsyncPipe, NgFor, FormularioLibroComponent],
  templateUrl: "./libros.html",
  styleUrl: "./libros.css"
})
export class LibrosComponent {

  libros$: Observable<Libro[]>;

  constructor(private store: Store<{ libros: Libro[] }>) {
    this.libros$ = this.store.select(state => state.libros);
  }

  onLibroAgregado(libro: Libro): void {
    this.store.dispatch(agregarLibro({ libro }));
  }

  eliminar(id: number): void {
    this.store.dispatch(eliminarLibro({ id }));
  }

  darVotoPositivo(id: number): void {
    this.store.dispatch(votarPositivo({ id }));
  }

  darVotoNegativo(id: number): void {
    this.store.dispatch(votarNegativo({ id }));
  }
}
