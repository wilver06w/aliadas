import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-liquidacion-dias',
  templateUrl: './mi-liquidacion-dias.component.html',
  styleUrls: ['./mi-liquidacion-dias.component.css']
})
export class MiLiquidacionDiasComponent {

  public misLiquidaciones!: any;
  public miLiquidacion!: any;
  public selectedItem!: any;
  public fecha_inicio!: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.selectedItem = this.route.snapshot.paramMap.get('id');
    this.selectedItem = this.selectedItem - 1;

    this.misLiquidaciones = localStorage.getItem('MIS_LIQUIDACIONES');
    this.misLiquidaciones = JSON.parse(this.misLiquidaciones);

    console.log(this.misLiquidaciones[this.selectedItem])

    this.miLiquidacion = (this.misLiquidaciones[this.selectedItem]);

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
