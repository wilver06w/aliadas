import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  getDataLogin(pForm: any) {
    this.usuariosService.login(pForm.value).subscribe(response => {
      if (response.error) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Error en usuario ó contraseña',
          timer: 4500
        })
      } else {
        localStorage.setItem('token', response.token);
        localStorage.setItem('roll', response.roll);
        localStorage.setItem('tokenUser', 'HJGT5F23DRE08-ALIADAS')
        this.router.navigate(['/dashboard'])
      }
    })
  }

}
