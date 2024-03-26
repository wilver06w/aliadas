import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
    this.checkExpiration()
  }


  checkExpiration() {
    const token = localStorage.getItem('token');

    if (token) {
      const tokenPayload: any = jwt_decode(token);
      const expirationDate = new Date(tokenPayload.exp_date * 1000);
      const currentDate = new Date();

      if (expirationDate < currentDate) {
        this.sesionExpirada()
      }
    }
  }

  //Verificar acceso a contenidos restringidos
  canActivate(): boolean {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Debes primero iniciar sesión',
        timer: 4500
      })
      this.router.navigate(['/'])
      return false;
    }
  }

  sesionExpirada() {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Sesión Expirada',
      timer: 4500
    })
    localStorage.removeItem('token');
    localStorage.removeItem('roll');
    this.router.navigate(['/'])
  }

  //Cerrar sesión
  logout() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesión cerrada con éxito',
      timer: 4500
    })
    localStorage.removeItem('token');
    localStorage.removeItem('roll');
    this.router.navigate(['/'])
  }


  //Comprobar si el usuario está login para mostrar logout
  isLoggedIn(): boolean {
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      return false
    }
    return true;
  }




}
