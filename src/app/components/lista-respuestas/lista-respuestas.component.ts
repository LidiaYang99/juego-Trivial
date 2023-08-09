import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lista-respuestas',
  templateUrl: './lista-respuestas.component.html',
  styleUrls: ['./lista-respuestas.component.css']
})
export class ListaRespuestasComponent {

  @Input() respuestas: string[];
  @Input() acertado: boolean;

  @Output() respuestaPulsada: EventEmitter<string>

  constructor() {
    this.respuestas = [];
    this.acertado = true;

    this.respuestaPulsada = new EventEmitter()

  }

  getRespuestaPulsada($event: string) {
    console.log($event);

    this.respuestaPulsada.emit($event)
  }

  getDdesparecer() {
    this.acertado = true
  }
}
