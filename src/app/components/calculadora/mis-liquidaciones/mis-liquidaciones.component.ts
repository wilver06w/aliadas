import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-liquidaciones',
  templateUrl: './mis-liquidaciones.component.html',
  styleUrls: ['./mis-liquidaciones.component.css']
})
export class MisLiquidacionesComponent {

  public misLiquidaciones!: any;
  public selectedItem!: number;
  public tipo!: string;

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
    })
  }

  viewLiquidacion($event: any) {
    this.selectedItem = +$event.target.parentElement.id;

    this.tipo = this.misLiquidaciones[this.selectedItem - 1].tipo;

    if (this.tipo === "completo") {
      this.router.navigate([`/calculadora/mi-liquidacion-completo/${this.selectedItem}`]);
    } if (this.tipo === "dias") {
      this.router.navigate([`/calculadora/mi-liquidacion-dias/${this.selectedItem}`])
    } if (this.tipo === "horas") {
      this.router.navigate([`/calculadora/mi-liquidacion-horas/${this.selectedItem}`])
    }
  }




}
