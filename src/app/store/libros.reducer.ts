import { createReducer, on } from "@ngrx/store";
import { agregarLibro, eliminarLibro, votarPositivo, votarNegativo } from "./libros.actions";
import { Libro } from "./libro.model";

export const initialState: Libro[] = [
  { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupery", votos: 0 },
  { id: 2, titulo: "Cien Anos de Soledad", autor: "Gabriel Garcia Marquez", votos: 0 },
  { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", votos: 0 }
];

export const librosReducer = createReducer(
  initialState,
  on(agregarLibro, (state, { libro }) => [...state, libro]),
  on(eliminarLibro, (state, { id }) => state.filter(libro => libro.id !== id)),
  on(votarPositivo, (state, { id }) =>
    state.map(libro => libro.id === id ? { ...libro, votos: libro.votos + 1 } : libro)
  ),
  on(votarNegativo, (state, { id }) =>
    state.map(libro => libro.id === id ? { ...libro, votos: libro.votos - 1 } : libro)
  )
);
