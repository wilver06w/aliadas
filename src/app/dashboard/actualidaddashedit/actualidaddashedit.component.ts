import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualidadService } from 'src/app/services/actualidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualidaddashedit',
  templateUrl: './actualidaddashedit.component.html',
  styleUrls: ['./actualidaddashedit.component.css']
})
export class ActualidaddasheditComponent {

  public id: string | any;

  createForm: FormGroup;

  constructor(private route: Router, private ActivateRoute: ActivatedRoute, private ActualidadService: ActualidadService) {

    this.createForm = new FormGroup({
      imagen: new FormControl('', []),
      fecha: new FormControl('', []),
      titulo: new FormControl('', []),
      contenido: new FormControl('', [])

    })
  }

  ngOnInit() {
    this.ActivateRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;
      const miNoticia = await this.ActualidadService.getById(id);
      const { id: _, isDelete, ...noticiaSinId } = miNoticia;
      this.createForm.setValue(noticiaSinId);
    })
  }

  async onSubmit() {
    const results = await this.ActualidadService.updateNoticia(this.id, this.createForm.value);

    if (results.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Noticia actualizada con éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.route.navigate(['/dashboard/actualidaddetail/' + this.id]);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha actualizado ninguna noticia, intenta nuevamente.',
        showConfirmButton: false,
        timer: 4500,
      })
    }



  }

}
