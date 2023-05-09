import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EditData, Registro, Service } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = "/api/services/"
  userID= "";
  private userID$ = new BehaviorSubject<string>(this.userID)
  public idActual$!:string;

  public datosPerfil!:EditData

  constructor(private http: HttpClient) { }


  crearService(service:Service): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}createService/`,service);
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}listServices`);
}
 
}