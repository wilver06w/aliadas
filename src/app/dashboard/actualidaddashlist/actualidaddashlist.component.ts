import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Actualidad } from 'src/app/interfaces/actualidad.interface';
import { ActualidadService } from 'src/app/services/actualidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualidaddashlist',
  templateUrl: './actualidaddashlist.component.html',
  styleUrls: ['./actualidaddashlist.component.css']
})
export class ActualidaddashlistComponent {

  public noticias!: Actualidad[];

  constructor(private router: Router, private ActualidadService: ActualidadService) { }

  async ngOnInit() {
    this.noticias = await this.ActualidadService.getAll()
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
        if (response.affectedRows) {
          this.noticias = await this.ActualidadService.getAll()
        }
      }
    })
  }

  editNoticia(id: number) {
    this.router.navigate(['/dashboard/actualidaddetail/' + id], {});
  }

  viewNoticia(id: number) {
    this.router.navigate(['/dashboard/actualidaddetail/' + id], {});
  }


}
