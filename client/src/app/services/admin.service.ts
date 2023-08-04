import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Admin } from '../models/admin.model';
import { AdminRegister } from '../models/admin-register.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource = new BehaviorSubject<Admin | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  register(adminRegisterInput: AdminRegister): Observable<Admin | null> {

    return this.http.post<Admin>('http://localhost:5000/api/admin/register', adminRegisterInput)
      .pipe(
        map(admin => {
          if (admin) {
            this.currentUserSource.next(admin);

            return admin;
          }

          return null;
        })
      );
  }
}
