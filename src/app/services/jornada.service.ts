import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Jornada } from '../interfaces/jornada';


@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  private baseUrl: string = 'https://aliadasapp-c7b7f9ab639b.herokuapp.com/api/jornada/'

  constructor(private httpClient: HttpClient) { }

  getById(id: string) {
    return lastValueFrom(this.httpClient.get<Jornada>(this.baseUrl + id))
  }

  updateJornada(id: number, formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, formValue, httpOptions))
  }

}
