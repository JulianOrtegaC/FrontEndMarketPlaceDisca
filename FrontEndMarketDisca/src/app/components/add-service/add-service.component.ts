import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditData, Service } from 'src/app/interfaces/cuenta';
import { ServicesService } from 'src/app/services/services.service';
import{Storage ,ref , uploadBytes} from '@angular/fire/storage'
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']

})
export class AddServiceComponent implements OnInit {

  constructor(private storage :Storage, private servicesService: ServicesService, private router: Router , private registerService : RegisterService) { }
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
  file!:any;
  // fin datos Servicio

  @ViewChild('myDate') myDate: any;
  // aqui lo de data
  openCalendar() {
    this.myDate.nativeElement.click();
  }
  
  //fin de lo del data



  // lo de las imagenes

  cargarImagen($event: any): void {
     this.file = $event.target.files[0];
    const lector = new FileReader();
    lector.readAsDataURL(this.file);
    lector.onload = () => {
      this.imagenes.push(lector.result as string);
    };
  }

  //Crear Servicio

  addServicio() {
    var infoData :EditData ;
    infoData = this.registerService.getdatosPerfil$;
    console.log(infoData);
    const imgRef = ref(this.storage ,`images/${infoData.Email}`);
    uploadBytes(imgRef,this.file)
      .then(respose =>console.log(respose))
      .catch(error=>console.log(error));
    const dataService = {
      categoria: this.categoria,
      nameService: this.nameService,
      description: this.description,
      initialPrice: this.initialPrice,
      pathPhotos: this.pathPhotos,
      address: this.address,
      datesDispo: this.datesDispo
    }

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
