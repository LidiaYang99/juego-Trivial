import { Injectable } from '@angular/core';
import { Pregunta } from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private arrPreguntas: Pregunta[]


  constructor() {
    this.arrPreguntas = [{
      texto: "¿Cuál es la capital de Francia?",
      respuestas: ["París", "Madrid", "Berlín", "Roma"],
      correcta: "París",
      puntuacion: 3
    },
    {
      texto: "¿Cuál es el resultado de 3 + 2?",
      respuestas: ["4", "5", "6", "7"],
      correcta: "5",
      puntuacion: 2
    },
    {
      texto: "¿Cuál es el elemento químico con símbolo O?",
      respuestas: ["Oro", "Oxígeno", "Osmio", "Olitio"],
      correcta: "Oxígeno",
      puntuacion: 3
    },
    {
      texto: "¿Cuál es el planeta más grande del sistema solar?",
      respuestas: ["Tierra", "Júpiter", "Marte", "Saturno"],
      correcta: "Júpiter",
      puntuacion: 4
    },
    {
      texto: "¿En qué año terminó la Segunda Guerra Mundial?",
      respuestas: ["1940", "1944", "1945", "1950"],
      correcta: "1945",
      puntuacion: 5
    },
    {
      texto: "¿Cuál es el idioma oficial de Brasil?",
      respuestas: ["Español", "Inglés", "Portugués", "Francés"],
      correcta: "Portugués",
      puntuacion: 3
    },
    {
      texto: "¿Cuál es el río más largo del mundo?",
      respuestas: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
      correcta: "Amazonas",
      puntuacion: 4
    },
    {
      texto: " ¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
      respuestas: ["1896", "1908", "1924", "1936"],
      correcta: "1896",
      puntuacion: 5
    },
    {
      texto: "¿Cuál es la fórmula química del agua?",
      respuestas: ["CO2", "H2O", "O2", "NaCl"],
      correcta: "H2O",
      puntuacion: 3
    },
    {
      texto: "¿En qué año se fundó la ONU?",
      respuestas: ["1942", "1945", "1950", "1955"],
      correcta: "1945",
      puntuacion: 5
    }]

  }


  getPregunta(pPosicion: number): Pregunta {
    console.log(this.arrPreguntas[pPosicion]);

    return this.arrPreguntas[pPosicion]


  }

}
