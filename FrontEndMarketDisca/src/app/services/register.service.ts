import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EditData, Registro } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = "/Login/Register/"
  private myApiUrlL: string = "/Login/"
  userID= "";
  private userID$ = new BehaviorSubject<string>(this.userID)
  public idActual$!:string;

  public datosPerfil!:EditData

  constructor(private http: HttpClient) { }

  register(register : Registro): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,register); 
  }
  login(userName: string, password: string): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlL}?userName=${userName}&password=${password}`, {});
  }
  get actualID$(): Observable<string> {
    return this.userID$.asObservable();
  }

  setDatosProfile(data:EditData){
      this.datosPerfil=data;
  }
  setactualID(documentNumber: string) {
    this.userID$.next(documentNumber);
    this.idActual$=documentNumber;
  }

  get getdatosPerfil$(): EditData {
    return this.datosPerfil;
  }

}
