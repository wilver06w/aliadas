import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent {

  constructor() { }

  llamar(phoneNumber: string) {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Si la navegación se hace desde un dispositivo móvil, realizar la llamada
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Si la navegación se hace desde un ordenador, mostrar un mensaje de alerta
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Utiliza tu móvil para hacer esta llamada',
        showConfirmButton: false,

        timer: 4500
      })
    }
  }
}
