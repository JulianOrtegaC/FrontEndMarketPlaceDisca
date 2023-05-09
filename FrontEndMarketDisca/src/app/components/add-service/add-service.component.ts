import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/interfaces/cuenta';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']

})
export class AddServiceComponent implements OnInit {

  constructor(private servicesService: ServicesService, private router: Router) { }
  ngOnInit(): void {

  }
  imagenes: string[] = [];

  // datos Servicio
  categoria!: string;
  nameService!: string;
  description!: string;
  initialPrice!: string;
  pathPhotos!: string;
  address!: string;
  datesDispo!: string;
  // fin datos Servicio

  @ViewChild('myDate') myDate: any;
  // aqui lo de data
  openCalendar() {
    this.myDate.nativeElement.click();
  }
  
  //fin de lo del data



  // lo de las imagenes

  cargarImagen(evento: any): void {
    const archivo = evento.target.files[0];
    const lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => {
      this.imagenes.push(lector.result as string);
    };
  }

  //Crear Servicio

  addServicio() {
    const dataService = {
      categoria: this.categoria,
      nameService: this.nameService,
      description: this.description,
      initialPrice: this.initialPrice,
      pathPhotos: this.pathPhotos,
      address: this.address,
      datesDispo: this.datesDispo
    }
    console.log(dataService);
    this.servicesService.crearService(dataService).subscribe({
      next: (res: any) => {
        this.router.navigate(['profile']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}

function isSameDay(selectedDate: Date, date: Date): unknown {
  throw new Error('Function not implemented.');
}
