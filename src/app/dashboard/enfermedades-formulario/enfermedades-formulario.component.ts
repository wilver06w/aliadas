import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnfermedadesService } from 'src/app/services/enfermedades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enfermedades-formulario',
  templateUrl: './enfermedades-formulario.component.html',
  styleUrls: ['./enfermedades-formulario.component.css']
})
export class EnfermedadesFormularioComponent {
  public id: string | any;

  createForm: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private EnfermedadesService: EnfermedadesService) {

    this.createForm = new FormGroup({
      url: new FormControl('', []),
      descripcion: new FormControl('', []),
      titulo_1: new FormControl('', []),
      texto_1: new FormControl('', []),
      titulo_2: new FormControl('', []),
      texto_2: new FormControl('', []),
      titulo_3: new FormControl('', []),
      texto_3: new FormControl('', []),
      titulo_4: new FormControl('', []),
      texto_4: new FormControl('', []),
      titulo_5: new FormControl('', []),
      texto_5: new FormControl('', []),
      titulo_6: new FormControl('', []),
      texto_6: new FormControl('', []),
      titulo_7: new FormControl('', []),
      texto_7: new FormControl('', []),
      titulo_8: new FormControl('', []),
      texto_8: new FormControl('', []),
      titulo_9: new FormControl('', []),
      texto_9: new FormControl('', []),
      titulo_10: new FormControl('', []),
      texto_10: new FormControl('', []),
      titulo_11: new FormControl('', []),
      texto_11: new FormControl('', []),
      titulo_12: new FormControl('', []),
      texto_12: new FormControl('', []),
      titulo_13: new FormControl('', []),
      texto_13: new FormControl('', []),
    })
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;
      const miContenido = await this.EnfermedadesService.getById(id);
      const { id: _, ...contenidoSinId } = miContenido;
      this.createForm.setValue(contenidoSinId);
    })
  }

  async onSubmit() {
    const results = await this.EnfermedadesService.updateEnfermedades(this.id, this.createForm.value);

    if (results) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contenido actualizado con éxito',
        showConfirmButton: false,
        timer: 4500
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha actualizado ningún curso',
        showConfirmButton: false,
        timer: 4500,
      })
    }

  }


}
