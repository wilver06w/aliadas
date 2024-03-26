import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { diasTrabajados } from 'src/app/guards/utils/functions';

@Component({
  selector: 'app-calculadora-horas',
  templateUrl: './calculadora-horas.component.html',
  styleUrls: ['./calculadora-horas.component.css']
})
export class CalculadoraHorasComponent {

  //Variables del Formulario
  public misLiquidaciones: any[] = [];
  public fecha_inicio!: string;
  public fecha_fin!: string;
  public salario_hora__horas!: number;
  public horasTrabajoDia__horas!: number;
  public diasTrabajoMes__horas!: number;
  public auxilio_transporte__horas!: number;
  public otros_pagos!: number;
  public fecha_creacion!: any;

  //Variables Calculos
  public horasAlMesConcreto__horas!: number;
  public horasDias__horas!: number;
  public numeroMesesTrabajados__horas!: number;
  public diasLiquidacion__horas!: number;
  public diasDelAno__horas!: number;
  public promedioSalarioMensual__horas!: number;
  public valorLiquidarSeguridad__horas!: number;
  public baseLiquidacion__horas!: number;
  public promedioTransporteMensual__horas!: number;
  public auxilioTransporteDiario__horas!: number;
  public transporteSemanal__horas!: number;
  public cesantias__horas!: number;
  public interesesCesantias__horas!: number;
  public prima__horas!: number;
  public vacaciones__horas!: number;
  public diasVacaciones__horas!: number;
  public seguridadSocial__horas!: number;


  //Otras Variables
  public showDivResults: boolean = false;
  public showDivForm: boolean = true;
  public id!: number;
  public tipo: string = "horas"

  createForm: FormGroup;

  constructor() {
    this.createForm = new FormGroup({
      fecha_inicio: new FormControl('', [
        Validators.required,
      ]),
      fecha_fin: new FormControl('', [
        Validators.required
      ]),
      salario_hora__horas: new FormControl('', [
        Validators.required
      ]),
      horasTrabajoDia__horas: new FormControl('', [
        Validators.required
      ]),
      diasTrabajoMes__horas: new FormControl('', [
        Validators.required
      ]),
      auxilio_transporte__horas: new FormControl(),
      fecha_creacion: new FormControl(),
      otros_pagos: new FormControl(),
      seguridadSocial__horas: new FormControl(),
      id: new FormControl()
    })
  }

  ngOnInit() {

    const storeData = localStorage.getItem('MIS_LIQUIDACIONES');

    if (storeData) {
      this.misLiquidaciones = JSON.parse(storeData);
    }

  }

  onSubmit() {
    this.fecha_inicio = this.createForm.value.fecha_inicio;
    this.fecha_fin = this.createForm.value.fecha_fin;
    this.auxilio_transporte__horas = this.createForm.value.auxilio_transporte__horas;
    this.salario_hora__horas = this.createForm.value.salario_hora__horas;
    this.horasTrabajoDia__horas = this.createForm.value.horasTrabajoDia__horas;
    this.diasTrabajoMes__horas = this.createForm.value.diasTrabajoMes__horas;
    this.otros_pagos = this.createForm.value.otros_pagos;
    this.fecha_creacion = new Date();


    const arrayHora = this.createForm.value;

    this.misLiquidaciones.push(arrayHora);

    this.calculos();
    this.showDivResults = true;
    this.showDivForm = false;

  }

  calculos() {
    //Cálculos
    this.diasLiquidacion__horas = diasTrabajados(this.fecha_inicio, this.fecha_fin)

    this.horasAlMesConcreto__horas = this.horasTrabajoDia__horas * this.diasTrabajoMes__horas;

    this.horasDias__horas = this.horasAlMesConcreto__horas / 8;

    this.numeroMesesTrabajados__horas = this.diasLiquidacion__horas / 30;

    this.diasDelAno__horas = this.horasDias__horas * this.numeroMesesTrabajados__horas;

    this.promedioSalarioMensual__horas = this.salario_hora__horas * this.horasTrabajoDia__horas * this.diasDelAno__horas;

    this.valorLiquidarSeguridad__horas = (this.promedioSalarioMensual__horas / 30) * 21;

    this.auxilioTransporteDiario__horas = this.auxilio_transporte__horas / 30;

    this.transporteSemanal__horas = this.auxilioTransporteDiario__horas * this.numeroMesesTrabajados__horas;

    this.promedioTransporteMensual__horas = this.transporteSemanal__horas * 4.33;

    this.baseLiquidacion__horas = this.promedioSalarioMensual__horas + this.promedioTransporteMensual__horas;

    this.seguridadSocial__horas = this.baseLiquidacion__horas * 0.04;

    this.cesantias__horas = this.baseLiquidacion__horas * this.diasLiquidacion__horas / 360;


    this.interesesCesantias__horas = (this.cesantias__horas * this.diasLiquidacion__horas * 0.12) / 360;

    this.interesesCesantias__horas = (this.baseLiquidacion__horas * this.diasLiquidacion__horas / 360) * 0.12;

    this.prima__horas = this.baseLiquidacion__horas * this.diasLiquidacion__horas / 360;

    this.diasVacaciones__horas = this.diasLiquidacion__horas / 360 * 15;

    this.vacaciones__horas = this.diasVacaciones__horas * this.baseLiquidacion__horas / 30;

    this.id = this.misLiquidaciones.length;

    //Agregar Datos al Array
    this.misLiquidaciones[this.misLiquidaciones.length - 1].salario_hora__horas = this.salario_hora__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].horasTrabajoDia__horas = this.horasTrabajoDia__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasTrabajoMes__horas = this.diasTrabajoMes__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].auxilio_transporte__horas = this.auxilio_transporte__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].fecha_creacion = this.fecha_creacion;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].seguridadSocial__horas = this.seguridadSocial__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].id = this.id;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].horasAlMesConcreto__horas = this.horasAlMesConcreto__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].tipo = this.tipo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].cesantias__horas = this.cesantias__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].interesesCesantias__horas = this.interesesCesantias__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].prima__horas = this.prima__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].vacaciones__horas = this.vacaciones__horas;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].promedioTransporteMensual__horas = this.promedioTransporteMensual__horas;


    //Actualizar LocalStorage
    localStorage.setItem('MIS_LIQUIDACIONES', JSON.stringify(this.misLiquidaciones));

  }

  checkControl(controlName: string, errorName: string) {
    if (this.createForm.get(controlName)?.hasError(errorName) && this.createForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
