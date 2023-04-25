import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Registro } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = "/Login/Register/"
  private myApiUrlL: string = "/Login/"
  userID= 0
  private userID$ = new BehaviorSubject<number>(this.userID)
  public idActual$!:number;

  public datosPerfil!:Registro

  constructor(private http: HttpClient) { }

  register(register : Registro): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,register); 
  }
  login(userName: string, password: string): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlL}?userName=${userName}&password=${password}`, {});
  }
  get actualID$(): Observable<number> {
    return this.userID$.asObservable();
  }

  setDatosProfile(
    idUser:string,
    nameUser:string,
    lastNameUser:string,
    address:string,
    telephone:string,
    email:string,
    typeDocument:string,
    gender:string,
    password:string){
      this.datosPerfil={
        "idUser":idUser,
        "nameUser":nameUser,
        "lastNameUser":lastNameUser,
        "address":address,
        "telephone":telephone,
        "email":email,
        "typeDocument":typeDocument,
        "gender":gender,
        "password":password}
  }
  setactualID(documentNumber: number) {
    this.userID$.next(documentNumber);
    this.idActual$=documentNumber;
  }

  get getdatosPerfil$(): Registro {
    return this.datosPerfil;
  }

}
