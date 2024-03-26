import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mi-liquidacion-horas',
  templateUrl: './mi-liquidacion-horas.component.html',
  styleUrls: ['./mi-liquidacion-horas.component.css']
})
export class MiLiquidacionHorasComponent {

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

  deleteLiquidacion($event: any) { }

}
