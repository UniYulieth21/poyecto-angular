import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Libro } from "../store/libro.model";

function longitudMinima(minimo: number): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.value && control.value.trim().length < minimo) {
      return { longitudMinima: { requerida: minimo, actual: control.value.trim().length } };
    }
    return null;
  };
}

@Component({
  selector: "app-formulario-libro",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./formulario-libro.html",
  styleUrl: "./formulario-libro.css"
})
export class FormularioLibroComponent implements OnInit {

  @Output() libroAgregado = new EventEmitter<Libro>();

  formulario!: FormGroup;
  private nextId: number = 100;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      titulo: ["", [Validators.required, longitudMinima(3)]],
      autor: ["", Validators.required]
    });
  }

  enviar(): void {
    if (this.formulario.valid) {
      const nuevoLibro: Libro = {
        id: this.nextId++,
        titulo: this.formulario.value.titulo,
        autor: this.formulario.value.autor,
        votos: 0
      };
      this.libroAgregado.emit(nuevoLibro);
      this.formulario.reset();
    }
  }
}
