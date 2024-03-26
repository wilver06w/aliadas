import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resultados-calculadora-horas',
  templateUrl: './resultados-calculadora-horas.component.html',
  styleUrls: ['./resultados-calculadora-horas.component.css']
})
export class ResultadosCalculadoraHorasComponent {

  @Input() fecha_inicio!: string;
  @Input() fecha_fin!: string;
  @Input() diasLiquidacion__horas!: number;
  @Input() salario_hora__horas!: number;
  @Input() promedioTransporteMensual__horas!: number;
  @Input() promedioSalarioMensual__horas!: number;
  @Input() otros_pagos!: number;
  @Input() baseLiquidacion__horas!: number;
  @Input() cesantias__horas!: number;
  @Input() interesesCesantias__horas!: number;
  @Input() vacaciones__horas!: number;
  @Input() prima__horas!: number;
  @Input() horasAlMesConcreto__horas!: number;
  @Input() id!: number;
  @Input() seguridadSocial__horas!: number;

  public misLiquidaciones!: any;
  public selectedItem!: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.misLiquidaciones = localStorage.getItem('MIS_LIQUIDACIONES');

    this.misLiquidaciones = JSON.parse(this.misLiquidaciones)
  }

  deleteLiquidacion($event: any) {

    Swal.fire({
      title: 'Eliminar Registro',
      text: "¿Está segura/o que desea eliminar esta liquidación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar ahora!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Liquidación Eliminada!',
        )
        this.selectedItem = +$event.target.parentElement.id;
        this.misLiquidaciones = this.misLiquidaciones.filter((item: { id: any; }) => item.id !== this.selectedItem);

        localStorage.setItem('MIS_LIQUIDACIONES', JSON.stringify(this.misLiquidaciones));

      }
      this.router.navigate(['/calculadora/mis-liquidaciones'])
    })

  }

}
