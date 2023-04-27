import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }
  ngOnInit(): void {
  }
  email!: string;
  password!: string;
  errors:boolean = false;
  iniciarSesionConGoogle() {
    // Lógica para iniciar sesión con Google
  }

  iniciarSesionConFacebook() {
    // Lógica para iniciar sesión con Facebook
  }

  get Loginn() {
    return this.email && this.password;

  }
  login(): void {
    const auxEmail = this.email;
    const auxPas = this.password;

    console.log(auxEmail, auxPas);//estos estan indefinidosssss
    this.registerService.login(auxEmail,auxPas).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.registerService.setactualID(res.userId);
        this.registerService.setDatosProfile(
          res.idUser,
          res.nameUser,
          res.lastNameUser,
          res.birthDate,
          res.email,
          res.typeDocument,
          res.gender,
          res.password
        );

        this.router.navigate(['profile']);
        this.errors=false;
      },
      error: (err) => {
        console.log(err);
        this.errors=true;
      }
    });
  }
}
