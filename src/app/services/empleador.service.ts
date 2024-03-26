import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Empleador } from '../interfaces/empleador.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {

  private baseUrl: string = 'https://aliadasapp-c7b7f9ab639b.herokuapp.com/api/empleador/'

  constructor(private httpClient: HttpClient) { }

  getById(id: string) {
    return lastValueFrom(this.httpClient.get<Empleador>(this.baseUrl + id))
  }

  updateEmpleador(id: number, formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, formValue, httpOptions))
  }

}
