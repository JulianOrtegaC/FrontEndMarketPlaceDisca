import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditData, Registro, Service } from 'src/app/interfaces/cuenta';
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
    'Nombre',
    'Categoria',
    'Contratado',
    'Calificaciones',
    'Precio',
  ];
  dataSource = new MatTableDataSource<Service>();
  dataProfile!: EditData;
  imgProfile: string | null = null;
  imgProfiSelect: string | null = null;
  imageURL: string | null = null;
  file: any;
  changeImg: boolean = false;

  // Data Nueva nueva
  updateModel: EditData = {
    NameUser: '',
    Email:'',
    Telephone:''
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

    userService
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
  paginator!: MatPaginator;

  getServices() {
    this.servicesService.getServices().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Service>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit() {
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

  showCompras() {
    this.showMisServis = false;
    this.showPhotoProfile = false;
    this.showComp = true;
    this.showPrinci = false;
    this.showProfi = true;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
  }

  showMisServicios() {
    this.getServices();
    this.showPhotoProfile = false;
    this.showMisServis = true;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = true;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
  }
  showProfile() {
    this.showPhotoProfile = false;
    this.showMisServis = false;
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
  eliminarInscripcion(idSuba: number) {}
  showPrincipal() {
    this.showMisServis = false;
    this.showComp = false;
    this.showPrinci = true;
    this.showProfi = false;
    this.showeditProfi = false;
    this.showSecu = false;
    this.showEditSecu = false;
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
          console.log(respose);
        })
        .catch((error) => console.log(error));
      this.dataProfile.Photo = this.imageURL = this.imageURL ?? '';
    } 
    var id ='';
    if(this.dataProfile.IdUser!=null){

      var id =this.dataProfile.IdUser;
    }
   
    this.updateModel.Photo = this.imageURL = this.imageURL ?? '';

    this.userService.updateUser(id, this.updateModel).subscribe(
      (response) => {
        console.log('Usuario actualizado:', response);
        this.editData = false;
        this.router.navigate(['profile']);
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}
