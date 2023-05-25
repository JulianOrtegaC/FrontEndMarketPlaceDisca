import { Component } from '@angular/core';
import { EditData, Service } from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listaPublicaciones!: Service[];
  dataProfile!: EditData;

  idActualuser$: string = '';

  constructor(private registerService: RegisterService) {
    this.dataProfile = registerService.getdatosPerfil$;
    if (this.dataProfile.IdUser) {
      this.idActualuser$ = this.dataProfile.IdUser;
    }
    console.log('este es el id actual' + this.idActualuser$);
  }

  mostrarModalVermasServicio(auxPubli: Service) {}
}
