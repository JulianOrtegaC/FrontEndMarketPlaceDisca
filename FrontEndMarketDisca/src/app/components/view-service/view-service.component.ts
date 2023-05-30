import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  ContactService,
  EditData,
  RequestService,
  Service,
} from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';
import { ServicesService } from 'src/app/services/services.service';
import { ViewServiceService } from 'src/app/services/view-service.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css'],
})
export class ViewServiceComponent {
  public datosService!: Service;
  datosContactService!: ContactService;
  dataProfile!: EditData;

  imgaServices: string[] = [];
  imagenSeleccionada: string = '';
  constructor(
    private router: Router,
    private viewService: ViewServiceService,
    private serviceServices: ServicesService,
    private registerService: RegisterService,

  ) {
    this.dataProfile = registerService.getdatosPerfil$;

    this.datosService = viewService.getDatosService$;

    const objeto = JSON.parse(this.datosService.pathPhotos);
    for (const item of objeto) {
      const url = item.imagen;
      this.imgaServices.push(url);
    }
    this.imagenSeleccionada = this.imgaServices[0];
    this.datosContactService = viewService.getDatosContactService$;
  }

  seleccionarImagen(imagen: string) {
    this.imagenSeleccionada = imagen;
  }
  solicitar(xd: Service) {
    const request: RequestService = {
      userIdUser: this.dataProfile.IdUser,
      serviceIdService: xd.idService,
      status: 'solicitado',
    };
    this.serviceServices.crearRequest(request).subscribe((data) => {
      this.router.navigate(['profile']);
    });
  }

  
}
