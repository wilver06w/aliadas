import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cesantiasF, diasTrabajados } from 'src/app/guards/utils/functions';

@Component({
  selector: 'app-calculadora-dias',
  templateUrl: './calculadora-dias.component.html',
  styleUrls: ['./calculadora-dias.component.css']
})
export class CalculadoraDiasComponent {

  //Variables Formulario:
  public misLiquidaciones: any[] = [];
  public fecha_inicio!: string;
  public fecha_fin!: string;
  public auxilio_transporte__dias!: number;
  public salarioPactado_dia__dias!: number;
  public diasTrabajadosMes__dias!: number;
  public diasTrabajadosSemana__dias!: number;
  public otros_pagos!: number;
  public diasTotalesTrabajados__dias!: number;
  public semanasDelMes__dias!: number;
  public diasMensualizados__dias!: number;
  public mesesTrabajados__dias!: number;
  public diasTrabajadosAnuales__dias!: number;
  public promedioSalarioMensual__dias!: number;
  public valorLiquidarSeguridad__dias!: number;
  public salarioBaseLiquidacion__dias!: number;
  public seguridadSocial__dias!: number;
  public auxilio_transporte__dias_diario__dias!: number;
  public transporteMensual__dias!: number;
  public cesantias__dias!: number;
  public interesesCesantias__dias!: number;
  public vacaciones__dias!: number;
  public prima__dias!: number;
  public pension__dias!: number;
  public diasVacaciones__dias!: number;
  public id: number = 1;
  public fecha_creacion!: any;
  public tipo: string = "dias"


  //Otras Variables
  public showDivResults: boolean = false;
  public showDivForm: boolean = true;

  createForm: FormGroup;

  constructor() {
    this.createForm = new FormGroup({
      fecha_inicio: new FormControl('', [
        Validators.required,
      ]),
      fecha_fin: new FormControl('', [
        Validators.required
      ]),
      auxilio_transporte__dias: new FormControl('', [
        Validators.required
      ]),
      salarioPactado_dia__dias: new FormControl('', [
        Validators.required
      ]),
      diasTrabajadosSemana__dias: new FormControl('', [
        Validators.required
      ]),
      diasTrabajadosMes__dias: new FormControl(),
      otros_pagos: new FormControl(),
      fecha_creacion: new FormControl(),
      id: new FormControl(),
      seguridadSocial__dias: new FormControl(),
      pension__dias: new FormControl(),


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
    this.auxilio_transporte__dias = this.createForm.value.auxilio_transporte__dias;
    this.salarioPactado_dia__dias = this.createForm.value.salarioPactado_dia__dias;
    this.diasTrabajadosSemana__dias = this.createForm.value.diasTrabajadosSemana__dias;
    this.otros_pagos = this.createForm.value.otros_pagos;
    this.fecha_creacion = new Date()

    const arrayDia = this.createForm.value;

    this.misLiquidaciones.push(arrayDia);

    this.calculos();
    this.showDivResults = true;
    this.showDivForm = false;
  }

  calculos() {
    this.diasTotalesTrabajados__dias = diasTrabajados(this.fecha_inicio, this.fecha_fin);

    this.semanasDelMes__dias = 30 / 7;

    this.diasMensualizados__dias = this.diasTrabajadosSemana__dias * this.semanasDelMes__dias;

    this.mesesTrabajados__dias = this.diasTotalesTrabajados__dias / 30;

    this.diasTrabajadosAnuales__dias = this.diasMensualizados__dias * this.mesesTrabajados__dias;

    this.promedioSalarioMensual__dias = this.salarioPactado_dia__dias * this.diasMensualizados__dias;

    this.valorLiquidarSeguridad__dias = (this.promedioSalarioMensual__dias / 30) * 21;

    this.seguridadSocial__dias = this.valorLiquidarSeguridad__dias * 0.04;

    this.pension__dias = this.valorLiquidarSeguridad__dias * 0.04;

    this.auxilio_transporte__dias_diario__dias = this.auxilio_transporte__dias / 30;

    this.transporteMensual__dias = this.auxilio_transporte__dias_diario__dias * this.diasMensualizados__dias

    this.salarioBaseLiquidacion__dias = this.promedioSalarioMensual__dias + this.transporteMensual__dias;

    this.cesantias__dias = cesantiasF(this.salarioBaseLiquidacion__dias, this.diasTotalesTrabajados__dias)

    this.interesesCesantias__dias = (this.salarioBaseLiquidacion__dias * this.diasTotalesTrabajados__dias / 360 * 0.12)

    this.prima__dias = this.salarioBaseLiquidacion__dias * this.diasTotalesTrabajados__dias / 360;

    this.diasVacaciones__dias = this.diasTotalesTrabajados__dias / 360 * 15;

    this.vacaciones__dias = this.diasVacaciones__dias * this.salarioBaseLiquidacion__dias / 30;

    this.id = this.misLiquidaciones.length;

    //Agregar Datos al Array


    this.misLiquidaciones[this.misLiquidaciones.length - 1].id = this.id;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasTotalesTrabajados__dias = this.diasTotalesTrabajados__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].auxilio_transporte__dias = this.auxilio_transporte__dias

    this.misLiquidaciones[this.misLiquidaciones.length - 1].salarioPactado_dia__dias = this.salarioPactado_dia__dias

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasTrabajadosMes__dias = this.diasTrabajadosMes__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasTrabajadosSemana__dias = this.diasTrabajadosSemana__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].semanasDelMes__dias = this.semanasDelMes__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasMensualizados__dias = this.diasMensualizados__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].mesesTrabajados__dias = this.mesesTrabajados__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasTrabajadosAnuales__dias = this.diasTrabajadosAnuales__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].promedioSalarioMensual__dias = this.promedioSalarioMensual__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].valorLiquidarSeguridad__dias = this.valorLiquidarSeguridad__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].seguridadSocial__dias = this.seguridadSocial__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].auxilio_transporte__dias_diario__dias = this.auxilio_transporte__dias_diario__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].transporteMensual__dias = this.transporteMensual__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].cesantias__dias = this.cesantias__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].interesesCesantias__dias = this.interesesCesantias__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].vacaciones__dias = this.vacaciones__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].prima__dias = this.prima__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].pension__dias = this.pension__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasVacaciones__dias = this.diasVacaciones__dias;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].fecha_creacion = this.fecha_creacion;

    this.misLiquidaciones[this.misLiquidaciones.length - 1].tipo = this.tipo;


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
