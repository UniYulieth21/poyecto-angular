import { createAction, props } from "@ngrx/store";
import { Libro } from "./libro.model";

export const agregarLibro = createAction(
  "[Libros] Agregar",
  props<{ libro: Libro }>()
);

export const eliminarLibro = createAction(
  "[Libros] Eliminar",
  props<{ id: number }>()
);

export const votarPositivo = createAction(
  "[Libros] Voto Positivo",
  props<{ id: number }>()
);

export const votarNegativo = createAction(
  "[Libros] Voto Negativo",
  props<{ id: number }>()
);
