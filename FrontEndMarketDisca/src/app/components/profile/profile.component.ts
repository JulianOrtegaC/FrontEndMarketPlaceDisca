import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['idSubasta','bananaType', 'measurementUnits', 'pricePurchase', 'dateStarted','dateEnded'];
  dataSource =<any> [];
  dataProfile!:Registro;
  constructor( private registerService: RegisterService,private router:Router) {
    this.dataProfile=registerService.getdatosPerfil$;

  }

  showVent: boolean = false;
  showComp: boolean = false;
  showProfi: boolean = false;
  showPrinci: boolean = true;
  showPhotoProfile:boolean = true;

  ngOnInit(): void {

  }
  
  ngAfterViewInit() {
    // Obtén todos los elementos de ancla del menú
const elementosMenu = document.getElementsByTagName("a");

// Agrega el evento onclick a cada etiqueta de ancla
for (let i = 0; i < elementosMenu.length; i++) {
  elementosMenu[i].addEventListener("click", function(event) {
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
    this.showProfi = false;
  }

  showVentas() {
    this.showPhotoProfile = false;
    this.showVent = true;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = false;

  }
  showProfile(){
    this.showPhotoProfile = false;
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = true;
  }
  eliminarA(idSub:number){
    this.router.navigate(['start']);
    
  }
  eliminarInscripcion(idSuba:number){

  }
  showPrincipal() {
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = true;
    this.showProfi = false;
  }

  
}
