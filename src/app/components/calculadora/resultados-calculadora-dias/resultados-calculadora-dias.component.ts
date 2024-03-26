import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-resultados-calculadora-dias',
  templateUrl: './resultados-calculadora-dias.component.html',
  styleUrls: ['./resultados-calculadora-dias.component.css']
})
export class ResultadosCalculadoraDiasComponent {

  @Input() fecha_inicio!: string;
  @Input() fecha_fin!: string;
  @Input() auxilio_transporte__dias!: number;
  @Input() salarioPactado_dia!: number;
  @Input() diasTrabajadosMes__dias!: number;
  @Input() diasTrabajadosSemana__dias!: number;
  @Input() otros_pagos!: number;
  @Input() promedioSalarioMensual__dias!: number;
  @Input() seguridadSocial__dias!: number;
  @Input() cesantias__dias!: number;
  @Input() interesesCesantias__dias!: number;
  @Input() vacaciones__dias!: number;
  @Input() prima__dias!: number;
  @Input() diasTotalesTrabajados__dias!: number;
  @Input() pension__dias!: number;
  @Input() diasTrabajadosAnuales__dias!: number;
  @Input() transporteMensual__dias!: number;
  @Input() salarioPactado_dia__dias!: number;
  @Input() id!: number;

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
