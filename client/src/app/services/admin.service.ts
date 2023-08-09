import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Admin } from '../models/admin.model';
import { AdminRegister } from '../models/admin-register.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private currentAdminSource = new BehaviorSubject<Admin | null>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  register(adminRegisterInput: AdminRegister): Observable<Admin | null> {

    return this.http.post<Admin>('http://localhost:5000/api/admin/register', adminRegisterInput)
      .pipe(
        map(admin => {
          if (admin) {
            this.currentAdminSource.next(admin);
            
            // this.setCurrentAdmin(admin);

            return admin;
          }

          return null;
        })
      );
  }
   
  // save admin to browser's localStorage: Refresh page save
  // setCurrentAdmin(admin: Admin): void {
  //   const adminString = JSON.stringify(admin);

  //   this.currentAdminSource.next(admin);
  //   localStorage.setItem('admin', adminString)

  //   this.currentAdminSource.next(admin);
  // }

  // logout(): void {
  //   localStorage.removeItem('admin');
  //   this.currentAdminSource.next(null);
  //   this.router.navigate([''])
  // }
}
