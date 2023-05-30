
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  idUser!:string;
  nameUser!:string;
  lastNameUser!:string;
  birthdate!:Date;
  email!:string;
  typeDocument!:string;
  date!:string;
  gender!:string;
  forgotPassword!:string;
  password!:string;
  errors:boolean=false;
  constructor(private registerService: RegisterService,  private router: Router ) { }
  ngOnInit() {
  }

  get Registerr() {
    return this.idUser && this.nameUser && this.lastNameUser  && this.email && this.typeDocument && this.birthdate && this.gender && this.forgotPassword && this.password ;

  }
  registrarse() {
    const registAux: Registro = {
      idUser:this.idUser,
      nameUser:this.nameUser,
      lastNameUser:this.lastNameUser,
      birthDate:this.birthdate,
      email:this.email,
      typeDocument:this.typeDocument,
      gender:this.gender,
      password:this.password
    }

    this.registerService.register(registAux).subscribe({
      next: (res: any) => {
        this.router.navigate(['login']);
        this.errors=false;
      },
      error: (err) => {
        this.errors=true;
      }
    })
   
  }
}
