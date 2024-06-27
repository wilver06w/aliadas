import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { diasTrabajados, cesantiasF } from 'src/app/guards/utils/functions';

@Component({
  selector: 'app-calculadora-completo',
  templateUrl: './calculadora-completo.component.html',
  styleUrls: ['./calculadora-completo.component.css']
})
export class CalculadoraCompletoComponent {

  createForm: FormGroup;

  //Variables de Formulario
  public misLiquidaciones: any[] = [];
  public fecha_inicio!: string;
  public fecha_fin!: string;
  public auxilio_transporte__completo!: number;
  public salario_mensual__completo!: number;
  public otros_pagos__completo!: number;
  public fecha_creacion!: any;

  //Variables de Fórmulas
  public diasTotalesTrabajados__completo!: number;
  public salarioDiario__completo!: number;
  public salarioHora__completo!: number;
  public salarioMenosDeducciones__completo!: number;
  public seguridadSocial__completo!: number;
  public pensiones__completo!: number;
  public baseSalarialLiquidacion__completo!: number;
  public cesantias__completo!: number;
  public interesesCesantias__completo!: number;
  public prima__completo!: number;
  public diasVacaciones__completo!: number;
  public vacaciones__completo!: number;
  public id: number = 1;
  public tipo: string = "completo";
  public primaPonderada!: number;
  public prima__completoPonderada!: number;
  public diasTotalesTrabajadosPonderado__completo!: number;
  public primaPrimerSemestre: boolean = false;
  public primaSegundoSemestre: boolean = false;
  public buttonPrima: boolean = false;
  public showPrimaPonderada: boolean = false;

  public isPrimaPonderada: any;


  //Otras Variables
  public showDivResults: boolean = false;
  public showDivForm: boolean = true;
  public showAnoDiferente = false;
  public showButtonPrima = false;

  constructor() {

    this.createForm = new FormGroup({
      fecha_inicio: new FormControl('', [
        Validators.required,
      ]),
      fecha_fin: new FormControl('', [
        Validators.required
      ]),
      auxilio_transporte__completo: new FormControl('', []),
      isPrimaPonderada: new FormControl('si', [
        Validators.required
      ]),
      salario_mensual__completo: new FormControl('', [
        Validators.required
      ]),
      otros_pagos__completo: new FormControl(),
      fecha_creacion: new FormControl(),
      id: new FormControl(),
      cesantias__completo: new FormControl(),
      interesesCesantias__completo: new FormControl(),
      vacaciones__completo: new FormControl(),
      prima__completo: new FormControl()
    })
  }


  ngOnInit() {
    const storedData = localStorage.getItem('MIS_LIQUIDACIONES');

    if (storedData) {
      this.misLiquidaciones = JSON.parse(storedData);
    }
  }


  fechaValidacion() {
    let fechaInicio = this.createForm.get('fecha_inicio')?.value;
    let fechaFin = this.createForm.get('fecha_fin')?.value;
    let valueButtonPrima = this.createForm.get('')

    let fechaInicioObj = new Date(fechaInicio);
    let diaInicio = fechaInicioObj.getDate();
    let mesInicio = fechaInicioObj.getMonth() + 1;
    let anoInicio = fechaInicioObj.getFullYear();

    let fechaFinObj = new Date(fechaFin);
    let diaFin = fechaFinObj.getDate();
    let mesFin = fechaFinObj.getMonth() + 1;
    let anoFin = fechaFinObj.getFullYear();

    let medio = new Date('06-30-2023');

    let milisegundosMedio = fechaFinObj.getTime() - medio.getTime()

    this.diasTotalesTrabajadosPonderado__completo = milisegundosMedio / (1000 * 60 * 60 * 24);

    const auxilioTransporteMap: any = {
      2024: 162000,
      2023: 140606,
      2022: 117172,
      2021: 106454,
      2020: 102854,
      2019: 97032,
      2018: 88211,
      2017: 83140,
      2016: 77700,
      2015: 74000,
      2014: 72000,
      2013: 70500,
      2012: 67800,
      2011: 63600,
      2010: 61500
    };

    // Verifica si el año está en el mapa y asigna el valor correspondiente
    if (auxilioTransporteMap.hasOwnProperty(anoFin)) {
      this.auxilio_transporte__completo = auxilioTransporteMap[anoFin];
    } else {
      // Asigna un valor por defecto si el año no está en el mapa
      this.auxilio_transporte__completo = 0;
    }

    this.createForm.controls['auxilio_transporte__completo'].setValue(this.auxilio_transporte__completo);


    //Validación Años diferentes

    if (anoFin != anoInicio) {
      this.showAnoDiferente = true;
    } else {
      this.showAnoDiferente = false;
    }

    //Validación Prima
    if (mesInicio <= 6 && mesFin > 6) {
      this.showButtonPrima = true;
      this.showPrimaPonderada = true;
      this.primaPrimerSemestre = false;
      this.primaSegundoSemestre = false;

    }
    if (mesInicio <= 6 && mesFin <= 6) {
      this.showButtonPrima = false;
      this.primaPrimerSemestre = true;
      this.primaSegundoSemestre = false;
      this.showPrimaPonderada = false;

    }
    if (mesInicio > 6 && mesFin > 6) {
      this.showButtonPrima = false;
      this.primaPrimerSemestre = false;
      this.primaSegundoSemestre = true;
    }
  }


  onSubmit() {
    this.fecha_inicio = this.createForm.value.fecha_inicio;
    this.fecha_fin = this.createForm.value.fecha_fin;

    this.isPrimaPonderada = this.createForm.value.isPrimaPonderada;

    this.auxilio_transporte__completo = this.createForm.value.auxilio_transporte__completo;
    this.salario_mensual__completo = this.createForm.value.salario_mensual__completo;
    this.otros_pagos__completo = this.createForm.value.otros_pagos__completo;
    this.fecha_creacion = new Date();

    const arrayMensual = this.createForm.value;

    this.misLiquidaciones.push(arrayMensual);

    console.log(this.misLiquidaciones)

    this.calculos();
    this.showDivResults = true;
    this.showDivForm = false;
  }


  calculos() {

    //Calculos
    this.diasTotalesTrabajados__completo = diasTrabajados(this.fecha_inicio, this.fecha_fin);
    this.salarioDiario__completo = this.salario_mensual__completo / 30;
    this.salarioHora__completo = this.salarioDiario__completo / 8;
    this.seguridadSocial__completo = this.salario_mensual__completo * 0.04;
    this.pensiones__completo = this.salario_mensual__completo * 0.04;
    this.salarioMenosDeducciones__completo = this.salario_mensual__completo - (this.seguridadSocial__completo + this.pensiones__completo);
    this.salarioHora__completo = this.salario_mensual__completo - (this.seguridadSocial__completo + this.pensiones__completo)
    this.baseSalarialLiquidacion__completo = this.salario_mensual__completo;
    this.cesantias__completo = cesantiasF(this.salario_mensual__completo, this.diasTotalesTrabajados__completo);

    this.interesesCesantias__completo = (this.cesantias__completo * this.diasTotalesTrabajados__completo * 0.12) / 360;

    if (this.isPrimaPonderada === 'no') {
      this.primaPonderada = this.salario_mensual__completo * this.diasTotalesTrabajadosPonderado__completo / 360;
    } else if (this.isPrimaPonderada === 'si') {
      this.prima__completo = this.baseSalarialLiquidacion__completo * this.diasTotalesTrabajados__completo / 360;
    } else {
      this.prima__completo = this.baseSalarialLiquidacion__completo * this.diasTotalesTrabajados__completo / 360;
    }



    this.diasVacaciones__completo = this.diasTotalesTrabajados__completo / 360 * 15;
    this.vacaciones__completo = this.diasVacaciones__completo * this.salarioDiario__completo;
    this.id = this.misLiquidaciones.length;


    //Agregar Datos al Array

    this.misLiquidaciones[this.misLiquidaciones.length - 1].diasTotalesTrabajados__completo = this.diasTotalesTrabajados__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].salario_mensual__completo = this.salario_mensual__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].auxilio_transporte__completo = this.auxilio_transporte__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].seguridadSocial__completo = this.seguridadSocial__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].salarioMenosDeducciones__completo = this.salarioMenosDeducciones__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].fecha_creacion = this.fecha_creacion;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].id = this.id;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].tipo = this.tipo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].cesantias__completo = this.cesantias__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].interesesCesantias__completo = this.interesesCesantias__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].vacaciones__completo = this.vacaciones__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].prima__completo = this.prima__completo;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].primaPonderada = this.primaPonderada;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].primaPrimerSemestre = this.primaPrimerSemestre;
    this.misLiquidaciones[this.misLiquidaciones.length - 1].primaSegundoSemestre = this.primaSegundoSemestre;


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
