import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Registro } from '../interfaces/cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = "/Login/Register/"

  constructor(private http: HttpClient) { }

  register(register : Registro): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,register); 
  }
}
