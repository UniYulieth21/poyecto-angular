import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-inicio",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./inicio.html",
  styleUrl: "./inicio.css"
})
export class InicioComponent {
  bienvenida: string = "Bienvenido a la aplicacion de libros";
  descripcion: string = "Gestiona tu lista de libros favoritos con votos";
}
