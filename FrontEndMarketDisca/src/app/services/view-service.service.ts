import { Injectable } from '@angular/core';
import { Service, ContactService } from '../interfaces/cuenta';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root',
})
export class ViewServiceService {
  public datosService!: Service;
   datosContactService!:ContactService;

  constructor() {}
  setDatosService(auxData: Service) {
    this.datosService = auxData;
  }
  get getDatosService$(): Service {
    return this.datosService;
  }

  setDatosContactService(auxData: ContactService) {
    this.datosContactService = auxData;
  }
  get getDatosContactService$(): ContactService {
    return this.datosContactService;
  }
}
