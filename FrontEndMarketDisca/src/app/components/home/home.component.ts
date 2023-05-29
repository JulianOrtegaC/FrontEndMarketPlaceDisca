import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService, EditData, Service } from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';
import { ServicesService } from 'src/app/services/services.service';
import { ViewServiceService } from 'src/app/services/view-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listaPublicaciones!: Service[];
  dataProfile!: EditData;
  ordenarPrecioBajo: boolean = false;
  idActualuser$: string = '';
  filters: any = {}; // Aquí almacena los filtros seleccionados

  constructor(
    private registerService: RegisterService,
    private servicesService: ServicesService,
    private viewService: ViewServiceService,
    private router: Router
  ) {
    this.dataProfile = registerService.getdatosPerfil$;
    if (this.dataProfile.IdUser) {
      this.idActualuser$ = this.dataProfile.IdUser;
    }
    this.getServices();
    console.log('este es el id actual' + this.idActualuser$);
  }

  mostrarModalVermasServicio(auxPubli: Service) {}

  getServices() {
    if (this.dataProfile.IdUser)
      this.servicesService.getServices().subscribe((data) => {
        console.log(data);
        this.listaPublicaciones = data;
        console.log(this.listaPublicaciones[0]);
      });
  }

  obtenerURLImagen(imagenes: string): string {
    const arreglo: any[] = JSON.parse(imagenes);
    if (arreglo && arreglo.length > 0) {
      return arreglo[0]?.imagen || '';
    }
    return '';
  }

  ordenarMenorPrecio() {
    this.listaPublicaciones.sort((a, b) => a.initialPrice - b.initialPrice);
    this.ordenarPrecioBajo = true;
  }

  async mostrarModalVerServicio(servicio: Service) {
    var datosContactService!: ContactService;

    this.viewService.setDatosService(servicio);
    const idServiceAux = servicio.idService ? servicio.idService : '';

    try {
      await this.servicesService
        .getContactServices(idServiceAux)
        .subscribe((data) => {
          this.viewService.setDatosContactService(data);
          console.log("se supone que ya estan ")
          this.router.navigate(['viewService']);
        });
    
    } catch (error) {
      console.log(error);
    }

 
  }
}
