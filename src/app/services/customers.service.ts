import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  private baseUrl: string = 'https://aliadasapp-c7b7f9ab639b.herokuapp.com/api/customers/'

  constructor(private httpClient: HttpClient) { }

  //Ver Todos los Clientes
  getAll(): Promise<Customer[]> {
    return lastValueFrom(this.httpClient.get<Customer[]>(this.baseUrl))
  }

  //Eliminar Customer
  deleteCustomer(id: number) {
    return lastValueFrom(this.httpClient.delete<any>(this.baseUrl + 'delete/' + id))
  }

  //Crear Customer
  createCustomer(pData: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'create', pData, httpOptions))
  }


}
