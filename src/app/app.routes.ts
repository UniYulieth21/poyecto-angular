import { Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio";
import { LibrosComponent } from "./libros/libros";

export const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponent },
  { path: "libros", component: LibrosComponent }
];
