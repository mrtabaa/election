import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  globAdmin: Admin | undefined;
  globError: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  addAdmin(): void {
    let admin: Admin = {
      email: "mozhgan@gmail.com",
      password: "123",
      confirmPassword: "123"
    }

    this.http.post<Admin>('http://localhost:5000/api/admin/register', admin).subscribe(
      {
        next: res => {
          this.globAdmin = res;
          this.router.navigateByUrl('');
        }
      }
    )
  }

  loginAdmin(): void {
    let admin: Admin = {
      email: "x@gmail.com",
      password: "123"
    }

    this.http.post<Admin>('http://localhost:5000/api/admin/login', admin).subscribe(
      {
        next: res => {
          this.globAdmin = res;
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
