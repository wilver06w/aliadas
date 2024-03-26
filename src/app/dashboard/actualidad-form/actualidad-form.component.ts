import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActualidadService } from 'src/app/services/actualidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualidad-form',
  templateUrl: './actualidad-form.component.html',
  styleUrls: ['./actualidad-form.component.css']
})
export class ActualidadFormComponent {

  createForm: FormGroup;

  constructor(private actualidadService: ActualidadService, private router: Router, private http: HttpClient) {
    this.createForm = new FormGroup({
      imagen: new FormControl(),
      fecha: new FormControl(),
      titulo: new FormControl(),
      contenido: new FormControl(),
    })
  }

  async onSubmit() {
    let resultado = await this.actualidadService.create(this.createForm.value);
    if (resultado.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado con Éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/actualidadlist/']);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha agregado ningún contenido',
        showConfirmButton: false,

        timer: 4500
      })
    }

  }

}
