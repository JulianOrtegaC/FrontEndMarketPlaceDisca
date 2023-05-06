import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditData, Registro } from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idSubasta', 'bananaType', 'measurementUnits', 'pricePurchase', 'dateStarted', 'dateEnded'];
  dataSource = <any>[];
  dataProfile!: EditData;
  xd!: string;
  constructor(private registerService: RegisterService, private userService: UsersService, private router: Router) {
    this.dataProfile = registerService.getdatosPerfil$;

  }
  editData: boolean = false;
  showVent: boolean = false;
  showComp: boolean = false;
  showProfi: boolean = false;
  showeditProfi: boolean = false;
  showPrinci: boolean = true;
  showPhotoProfile: boolean = false;
  showSecu: boolean = false;
  showEditSecu: boolean = false;

  ngOnInit(): void {
    this.dataProfile = this.registerService.getdatosPerfil$;
  }

  ngAfterViewInit() {
    // Obtén todos los elementos de ancla del menú
    const elementosMenu = document.getElementsByTagName("a");

    // Agrega el evento onclick a cada etiqueta de ancla
    for (let i = 0; i < elementosMenu.length; i++) {
      elementosMenu[i].addEventListener("click", function (event) {
        // Quita la clase .nav-seleccionada de todos los elementos de ancla
        for (let j = 0; j < elementosMenu.length; j++) {
          elementosMenu[j].classList.remove("nav-seleccionada");
        }

        // Agrega la clase .nav-seleccionada al elemento de ancla seleccionado
        const elementoSeleccionado = event.target as HTMLElement;
        elementoSeleccionado.classList.add("nav-seleccionada");
      });
    }

  }


  showCompras() {
    this.showVent = false;
    this.showPhotoProfile = false;
    this.showComp = true;
    this.showPrinci = false;
    this.showProfi = true;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
  }

  showVentas() {
    this.showPhotoProfile = false;
    this.showVent = true;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = true;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;

  }
  showProfile() {
    this.showPhotoProfile = false;
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = true;
    this.showeditProfi = true;
    this.showSecu = false;
    this.showEditSecu = false;
    this.editData = false;
  }
  eliminarA(idSub: number) {
    this.router.navigate(['start']);

  }
  eliminarInscripcion(idSuba: number) {

  }
  showPrincipal() {
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = true;
    this.showProfi = false;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
  }

  showSecurity() {
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = false;
    this.showeditProfi = false;
    this.showSecu = true;
    this.showEditSecu = true;
  }


  editarDataSave() {
    
    this.userService.patchUsers(this.dataProfile.idUser, this.dataProfile).subscribe({
      next: (res: any) => {
        this.editData=false;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



}
