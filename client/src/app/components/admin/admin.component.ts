import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  globAdmin: Admin | undefined;

  constructor(private http: HttpClient) { }

  Login(): void{
    let admin: Admin = {
      email: "mozhgan@gmail.com",
      password: "123"
    }

    this.http.post<Admin>('http://localhost:5000/api/admin/login', admin).subscribe(
     {next: res => this.globAdmin = res} 
    )
  }
}
