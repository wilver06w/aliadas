import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadorService } from 'src/app/services/empleador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleador-formulario',
  templateUrl: './empleador-formulario.component.html',
  styleUrls: ['./empleador-formulario.component.css']
})
export class EmpleadorFormularioComponent {

  public id: string | any;

  createForm: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private EmpleadorService: EmpleadorService) {

    this.createForm = new FormGroup({
      generalidades: new FormControl('', []),
      pregunta1: new FormControl('', []),
      respuesta1: new FormControl('', []),
      pregunta2: new FormControl('', []),
      respuesta2: new FormControl('', []),
      pregunta3: new FormControl('', []),
      respuesta3: new FormControl('', []),
      pregunta4: new FormControl('', []),
      respuesta4: new FormControl('', []),
      pregunta5: new FormControl('', []),
      respuesta5: new FormControl('', []),
      pregunta6: new FormControl('', []),
      respuesta6: new FormControl('', []),
      pregunta7: new FormControl('', []),
      respuesta7: new FormControl('', []),
      pregunta8: new FormControl('', []),
      respuesta8: new FormControl('', []),
      pregunta9: new FormControl('', []),
      respuesta9: new FormControl('', []),
      pregunta10: new FormControl('', []),
      respuesta10: new FormControl('', [])
    })
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;
      const miContenido = await this.EmpleadorService.getById(id);
      const { id: _, ...contenidoSinId } = miContenido;
      this.createForm.setValue(contenidoSinId);
    })
  }

  async onSubmit() {
    const results = await this.EmpleadorService.updateEmpleador(this.id, this.createForm.value);

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
