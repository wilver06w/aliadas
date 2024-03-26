import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BeneficiosService } from 'src/app/services/beneficios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-beneficioslaborales-formulario',
  templateUrl: './beneficioslaborales-formulario.component.html',
  styleUrls: ['./beneficioslaborales-formulario.component.css']
})
export class BeneficioslaboralesFormularioComponent {


  public id: string | any;

  createForm: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private BeneficiosService: BeneficiosService) {

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
      titulo_14: new FormControl('', []),
      texto_14: new FormControl('', []),
      titulo_15: new FormControl('', []),
      texto_15: new FormControl('', []),
      titulo_16: new FormControl('', []),
      texto_16: new FormControl('', []),
      titulo_17: new FormControl('', []),
      texto_17: new FormControl('', []),
      titulo_18: new FormControl('', []),
      texto_18: new FormControl('', []),
      titulo_19: new FormControl('', []),
      texto_19: new FormControl('', []),
      titulo_20: new FormControl('', []),
      texto_20: new FormControl('', []),
    })
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;
      const miContenido = await this.BeneficiosService.getById(id);
      const { id: _, ...contenidoSinId } = miContenido;
      this.createForm.setValue(contenidoSinId);
    })
  }

  async onSubmit() {
    const results = await this.BeneficiosService.updateBeneficios(this.id, this.createForm.value);

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
