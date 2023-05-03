import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EditData, Registro } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = "/Users/"

  public datosPerfil!:Registro

  constructor(private http: HttpClient) { }

 
  patchUsers(id: string, updateModel: EditData): Observable<any> {
    return this.http.patch(`${this.myAppUrl}${this.myApiUrl}?userName=${id}&password=${updateModel}`, {});
  }




}
