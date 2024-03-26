import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Actualidad } from 'src/app/interfaces/actualidad.interface';
import { ActualidadService } from 'src/app/services/actualidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualidaddashdetail',
  templateUrl: './actualidaddashdetail.component.html',
  styleUrls: ['./actualidaddashdetail.component.css']
})
export class ActualidaddashdetailComponent {

  public miNoticia: Actualidad | any;

  constructor(private router: Router, private ActivateRoute: ActivatedRoute, private ActualidadService: ActualidadService, private location: Location) { }

  ngOnInit() {
    this.ActivateRoute.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miNoticia = await this.ActualidadService.getById(id)
    })
  }

  async deleteNoticia(id: number) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta noticia?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Noticia eliminada!',
        )
        const response = await this.ActualidadService.deleteNoticia(id)
        this.router.navigate(['/dashboard/actualidadlist'], {});
      }
    })
  }

  back() {
    this.location.back()
  }

}
