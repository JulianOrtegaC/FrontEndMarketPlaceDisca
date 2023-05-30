import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditData } from 'src/app/interfaces/cuenta';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
  ngOnInit(): void {
    localStorage.removeItem('token');
  }
  email!: string;
  password!: string;
  errors: boolean = false;
  auxEditInfo!: EditData;
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

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

    this.registerService.login(auxEmail, auxPas).subscribe({
      next: (res: any) => {
        this.auxEditInfo = JSON.parse(res.usuario);
        this.registerService.storeToken(res.token);
        if (this.auxEditInfo.IdUser)
          this.registerService.setactualID(this.auxEditInfo.IdUser);
        this.registerService.setDatosProfile(this.auxEditInfo);

        this.router.navigate(['home']);
        this.errors = false;
      },
      error: (err) => {
        this.errors = true;
      },
    });
  }
}
