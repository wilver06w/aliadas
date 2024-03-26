import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Salario } from '../interfaces/salario';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  private baseUrl: string = 'https://aliadasapp-c7b7f9ab639b.herokuapp.com/api/salario/'

  constructor(private httpClient: HttpClient) { }


  getById(id: string) {
    return lastValueFrom(this.httpClient.get<Salario>(this.baseUrl + id))
  }

  updateLibertad(id: number, formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, formValue, httpOptions))
  }

}
