import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/models/admin-login.model';
import { AdminRegister } from 'src/app/models/admin-register.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  globAdminRegister: AdminRegister | undefined;
  globAdminLogin: AdminLogin | undefined;
  globError: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  registerAdmin(): void {
    let admin: AdminRegister = {
      email: "mozhgan@gmail.com",
      password: "123",
      confirmPassword: "123"
    }

    this.http.post<AdminRegister>('http://localhost:5000/api/admin/register', admin).subscribe( 
      {
        next: res => {
          this.globAdminRegister = res;
          this.router.navigateByUrl('');
        }
      }
    )
  }

  loginAdmin(): void {
    let admin: AdminLogin = {
      email: "x@gmail.com",
      password: "123"
    }

    this.http.post<AdminLogin>('http://localhost:5000/api/admin/login', admin).subscribe(
      {
        next: res => {
          this.globAdminLogin = res;
          this.router.navigateByUrl('/add-president');
        },
        error: errObj => {
          console.log(errObj.status, ": ", errObj.error);
          this.globError = errObj.error;
        }
      }
    )
  }
}
