import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Beneficios } from '../interfaces/beneficios';



@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  private baseUrl: string = 'https://aliadasapp-c7b7f9ab639b.herokuapp.com/api/beneficios/'

  constructor(private httpClient: HttpClient) { }

  getById(id: string) {
    return lastValueFrom(this.httpClient.get<Beneficios>(this.baseUrl + id))
  }

  updateBeneficios(id: number, formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, formValue, httpOptions))
  }

}
