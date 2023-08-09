import { Component, inject } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/pregunta.interface';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  preguntaService = inject(PreguntaService)

  numPreguntaActual: number;
  preguntaActual: Pregunta | undefined; //puede estar vacia

  nota: number;
  acertado: boolean;

  ready: boolean;

  constructor(private location: Location) {
    this.numPreguntaActual = 0;
    this.nota = 0;
    this.acertado = true;
    this.ready = false;
  }

  ngOnInit() {
    this.preguntaActual = this.preguntaService.getPregunta(this.numPreguntaActual)
    console.log(this.preguntaActual);
  }

  getAnswerPulsada($event: string) {
    console.log($event);

    if (this.preguntaActual?.correcta === $event) {
      // 这个问号的作用是如果是undefined,就直接不执行后面的；
      // 如果有值则进行后面得判断
      console.log('correcto');
      this.nota += 5
      console.log(this.nota);

      this.acertado = true;

      let timerInterval: any
      Swal.fire({
        title: 'Correcto!',
        icon: 'success',
        timer: 1500,
        timerProgressBar: true,

        didOpen: () => {
          Swal.showLoading()

          timerInterval = setInterval(() => {
            Swal.getTimerLeft()
          }, 1500)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })

    } else {
      console.log('error');
      this.nota += 0;

      this.acertado = false;

      let timerInterval: any
      Swal.fire({
        title: 'Oops!',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,

        didOpen: () => {
          Swal.showLoading()

          timerInterval = setInterval(() => {
            Swal.getTimerLeft()
          }, 1500)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
    }




    // 答完一题之后，进行下一题，重新渲染题目和问题
    this.numPreguntaActual++;
    this.preguntaActual = this.preguntaService.getPregunta(this.numPreguntaActual)
  }

  refresh() {
    window.location.reload();
  }

  getReady() {
    this.ready = true;
  }


}
