import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  EditData,
  Registro,
  RequestService,
  Service,
} from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';
import { ServicesService } from 'src/app/services/services.service';
import { UsersService } from 'src/app/services/users.service';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'img',
    'Nombre',
    'Categoria',
    'Contratado',
    'Calificaciones',
    'Precio',
  ];
  dataProfile!: EditData;
  imgProfile: string | null = null;
  imgProfiSelect: string | null = null;
  imageURL: string | null = null;
  file: any;
  changeImg: boolean = false;

  // Data Nueva nueva
  updateModel: EditData = {
    NameUser: '',
    Email: '',
    Telephone: '',
    // Inicializar otros campos aquí
  };
  xd!: string;
  newNameUser!: string;
  newEmailUser!: string;
  newTehephoneUser!: string;

  //
  constructor(
    private storage: Storage,
    private servicesService: ServicesService,
    private registerService: RegisterService,
    private userService: UsersService,
    private router: Router
  ) {
    this.dataProfile = registerService.getdatosPerfil$;
    this.getImgProfileew();
   
  }

  getImgProfileew(){
    this.userService
    .getImageImgProfile()
    .then((url: string | null) => {
      this.imgProfile = url;
    })
    .catch((error) => {
      console.log('Error al obtener la URL de la imagen:', error);
    });
  }
  editData: boolean = false;
  showMisServis: boolean = false;
  showComp: boolean = false;
  showProfi: boolean = false;
  showeditProfi: boolean = false;
  showPrinci: boolean = true;
  showPhotoProfile: boolean = false;
  showSecu: boolean = false;
  showEditSecu: boolean = false;

  ngOnInit(): void {
    this.dataProfile = this.registerService.getdatosPerfil$;
    this.userService.getImageImgProfile;
  }

  @ViewChild(MatPaginator)
  dataSource = <any>[];
  paginator!: MatPaginator;

  getRequest() {
    if (this.dataProfile.IdUser)
      this.servicesService
        .getMyRequest(this.dataProfile.IdUser)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource<RequestService>(data);
          this.dataSource.paginator = this.paginator;
        });
  }
  getServices() {
    if (this.dataProfile.IdUser)
      this.servicesService
        .getMyServices(this.dataProfile.IdUser)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource<Service>(data);
          this.dataSource.paginator = this.paginator;
        });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    // Obtén todos los elementos de ancla del menú
    const elementosMenu = document.getElementsByTagName('a');

    // Agrega el evento onclick a cada etiqueta de ancla
    for (let i = 0; i < elementosMenu.length; i++) {
      elementosMenu[i].addEventListener('click', function (event) {
        // Quita la clase .nav-seleccionada de todos los elementos de ancla
        for (let j = 0; j < elementosMenu.length; j++) {
          elementosMenu[j].classList.remove('nav-seleccionada');
        }

        // Agrega la clase .nav-seleccionada al elemento de ancla seleccionado
        const elementoSeleccionado = event.target as HTMLElement;
        elementoSeleccionado.classList.add('nav-seleccionada');
      });
    }
  }
  obtenerURLImagen(imagenes: string): string {
    console.log('aqui estan las imagenes '+imagenes)
    const arreglo: any[] = JSON.parse(imagenes);
    if (arreglo && arreglo.length > 0) {
      return arreglo[0]?.imagen || '';
    }
    return '';
  }
  showCompras() {
    this.getRequest();
    this.displayedColumns = ['Nombre', 'status', 'Eliminar'];

    this.showMisServis = false;
    this.showPhotoProfile = false;
    this.showPrinci = false;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
    this.showProfi = true;
    this.showComp = true;
  }

  showMisServicios() {
    this.getServices();
    this.displayedColumns = [
      'img',
      'Nombre',
      'Categoria',
      'Contratado',
      'Calificaciones',
      'Precio',
    ];
    this.showPhotoProfile = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
    this.showProfi = true;
    this.showMisServis = true;
  }
  showProfile() {
    this.showPhotoProfile = false;
    this.showMisServis = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showSecu = false;
    this.showEditSecu = false;
    this.editData = false;
    this.showProfi = true;
    this.showeditProfi = true;
  }
  eliminarA(idSub: number) {
    this.router.navigate(['start']);
  }
  eliminarInscripcion(serviceId:string , userId:string) {

    this.servicesService
    .deleteRequest(serviceId, userId)
    .subscribe((data) => {
      this.router.navigate(['home']);
    });
  }
  showPrincipal() {
    this.showMisServis = false;
    this.showComp = false;
    this.showProfi = false;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
    this.showPrinci = true;
  }

  showSecurity() {
    this.showMisServis = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = false;
    this.showeditProfi = false;
    this.showSecu = true;
    this.showEditSecu = true;
  }

  imgProfileSelect(event: any): void {
    const file1 = event.target.files[0];
    this.file = file1;
    const lector = new FileReader();
    lector.readAsDataURL(file1);
    lector.onload = () => {
      this.imgProfiSelect = lector.result as string;
    };
    this.changeImg = true;
  }

  editarDataSave() {
    if (this.changeImg == true) {
      const imgRef = ref(
        this.storage,
        `images/${this.dataProfile.Email}/Profile/photo.png`
      );
      uploadBytes(imgRef, this.file)
        .then((respose) => {
        })
        .catch((error) => console.log(error));
      this.dataProfile.Photo = this.imageURL = this.imageURL ?? '';
    }
    var id = '';
    if (this.dataProfile.IdUser != null) {
      var id = this.dataProfile.IdUser;
    }

    this.updateModel.Photo = this.imageURL = this.imageURL ?? '';

    this.userService.updateUser(id, this.updateModel).subscribe(
      (response) => {
        this.editData = false;
        this.getImgProfileew();
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}
