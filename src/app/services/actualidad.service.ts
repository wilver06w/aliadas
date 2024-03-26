import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Actualidad } from '../interfaces/actualidad.interface';



@Injectable({
  providedIn: 'root' //Módulos TODO
})
export class ActualidadService {

  private baseUrl: string = 'https://aliadasapp-c7b7f9ab639b.herokuapp.com/api/actualidad/'

  constructor(private httpClient: HttpClient) { }

  //Ver Todas las Noticias
  getAll(): Promise<Actualidad[]> {
    return lastValueFrom(this.httpClient.get<Actualidad[]>(this.baseUrl))
  }

  //Ver Noticia por ID
  getById(id: number): Promise<Actualidad> {
    return lastValueFrom(this.httpClient.get<Actualidad>(this.baseUrl + id))
  }

  deleteNoticia(id: number) {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'delete/' + id))
  }


  //Crear Noticia
  create(pData: FormData): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({ authorization: localStorage.getItem('token')! })
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'create', pData, httpOptions))
  }

  //Actualizar una Noticia
  updateNoticia(id: number, formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, formValue, httpOptions))
  }
}
