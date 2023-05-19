import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditData, Service } from 'src/app/interfaces/cuenta';
import { ServicesService } from 'src/app/services/services.service';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {
  constructor(
    private storage: Storage,
    private servicesService: ServicesService,
    private router: Router,
    private registerService: RegisterService
  ) {}
  ngOnInit(): void {}
  imagenes: string[] = [];

  // datos Servicio
  infoData!: EditData;
  categoria!: string;
  nameService!: string;
  description!: string;
  initialPrice!: string;
  pathPhotos: any[] = [];
  address!: string;
  datesDispo!: string;
  file: any[] = [];
  // fin datos Servicio

  @ViewChild('myDate') myDate: any;
  // aqui lo de data
  openCalendar() {
    this.myDate.nativeElement.click();
  }

  //fin de lo del data

  // lo de las imagenes

  cargarImagen($event: any): void {
    const file1 = $event.target.files[0];
    this.file.push(file1);
    const lector = new FileReader();
    lector.readAsDataURL(file1);
    lector.onload = () => {
      this.imagenes.push(lector.result as string);
    };
  }

  //Crear Servicio

  addServicio() {
    
    this.infoData = this.registerService.getdatosPerfil$;
    for (let index = 0; index < this.file.length; index++) {
      const imgRef = ref(
        this.storage,
        `images/${this.infoData.Email}/services/${this.nameService}/${this.file[index].name}`
      );
      uploadBytes(imgRef, this.file[index])
        .then((respose) => {
          console.log(respose);
        })

        .catch((error) => console.log(error));
    }
    this.getImages();
    const dataService = {
      categoria: this.categoria,
      nameService: this.nameService,
      description: this.description,
      initialPrice: this.initialPrice,
      pathPhotos: JSON.stringify(this.pathPhotos),
      address: this.address,
      datesDispo: this.datesDispo,
    };

    this.servicesService.crearService(dataService).subscribe({
      next: (res: any) => {
        this.router.navigate(['profile']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getImages() {
    const imagesRef = ref(this.storage, `images/${this.infoData.Email}/services/${this.nameService}`);

    listAll(imagesRef)
      .then(async (response) => {

        this.pathPhotos = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          const ImagenService ={imagen:url};
          this.pathPhotos.push(ImagenService);
        }
      })
      .catch((error) => console.log(error));
  }
}

function isSameDay(selectedDate: Date, date: Date): unknown {
  throw new Error('Function not implemented.');
}
