import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora-home.component.html',
  styleUrls: ['./calculadora-home.component.css']
})
export class CalculadoraComponent {

  public isTiempoCompleto: boolean = false;
  public isSalarioDias: boolean = false;
  public isSalarioHoras: boolean = false;
  public isDisable: boolean = true;

  onSubmitCompleto() {
    this.isTiempoCompleto = true;
    this.isSalarioDias = false;
    this.isSalarioHoras = false;
    this.isDisable = false;
  }

  onSubmitDias() {
    this.isSalarioDias = true;
    this.isTiempoCompleto = false;
    this.isSalarioHoras = false;
    this.isDisable = false;
  }

  onSubmitHoras() {
    this.isSalarioHoras = true;
    this.isTiempoCompleto = false;
    this.isSalarioDias = false;
    this.isDisable = false;
  }



}
