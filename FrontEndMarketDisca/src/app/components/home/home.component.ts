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

  // variables de los filtros
  filtroCategoria:string ='';
  filtroPriceMin:number=0;
  filtroPriceMax:number=0;

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
  selectedButton: string = ''; // Propiedad para almacenar el botón seleccionado

  selectButton(button: string): void {
    if (this.selectedButton === button) {
      this.selectedButton = ''; // Si el botón seleccionado es el mismo, lo deselecciona
    } else {
      this.selectedButton = button; // Si el botón seleccionado es diferente, lo selecciona
    }

    if(button =='precioBajo'){
      console.log("se selecciono el precio bajo")
      this.listaPublicaciones.sort((a, b) => a.initialPrice - b.initialPrice);
    }else
    if(button =='precioAlto'){
      console.log("se selecciono el precio Alto")
      this.listaPublicaciones.sort((a, b) => b.initialPrice - a.initialPrice);

    }
  }

  appFiltro(){
console.log("estos son los valores de los filtro "+ 'min' + this.filtroPriceMin + "max" + this.filtroPriceMax + "catego" + this.filtroCategoria)
  }

  orderProducts(orderBy: string) {
    if (orderBy === 'priceLowToHigh') {
      // Realiza la lógica para ordenar por precio de menor a mayor aquí
      // ...
    } else if (orderBy === 'priceHighToLow') {
      // Realiza la lógica para ordenar por precio de mayor a menor aquí
      // ...
    }
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
