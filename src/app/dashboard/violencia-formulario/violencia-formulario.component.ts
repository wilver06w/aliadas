import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViolenciaService } from 'src/app/services/violencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-violencia-formulario',
  templateUrl: './violencia-formulario.component.html',
  styleUrls: ['./violencia-formulario.component.css']
})
export class ViolenciaFormularioComponent {

  public id: string | any;

  createForm: FormGroup;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private ViolenciaService: ViolenciaService) {

    this.createForm = new FormGroup({
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
    })
  }


  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;
      const miContenido = await this.ViolenciaService.getById(id);
      const { id: _, ...contenidoSinId } = miContenido;
      this.createForm.setValue(contenidoSinId);
    })
  }

  async onSubmit() {
    const results = await this.ViolenciaService.updateViolencia(this.id, this.createForm.value);

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
