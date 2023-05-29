import { Component, OnInit } from '@angular/core';
import { ContactService, Service } from 'src/app/interfaces/cuenta';
import { ServicesService } from 'src/app/services/services.service';
import { ViewServiceService } from 'src/app/services/view-service.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css'],
})
export class ViewServiceComponent {
  public datosService!: Service;
  datosContactService!:ContactService;

  imgaServices: string[] = [];
  imagenSeleccionada: string = '';
  constructor(
    private viewService: ViewServiceService,
    private serviceServices: ServicesService
  ) {
    this.datosService = viewService.getDatosService$;

    const objeto = JSON.parse(this.datosService.pathPhotos);
    for (const item of objeto) {
      const url = item.imagen;
      this.imgaServices.push(url);
    }
    this.imagenSeleccionada = this.imgaServices[0];
     this.datosContactService =  viewService.getDatosContactService$;
  }

  seleccionarImagen(imagen: string) {
    this.imagenSeleccionada = imagen;
  }
}
