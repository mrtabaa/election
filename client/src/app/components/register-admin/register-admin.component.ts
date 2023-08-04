import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/models/admin-login.model';
import { AdminRegister } from 'src/app/models/admin-register.model';
import { AccountService as AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent {
  globAdminRegister: AdminRegister | undefined;
  globAdminLogin: AdminLogin | undefined;
  globError: string | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private adminService: AdminService) { }

  registerFg = this.fb.group({
    emailCtrl: ['', [Validators.required, Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]],
    passwordCtrl: ['', [Validators.required]],
    confirmPasswordCtrl: ['', [Validators.required]],
  }); 

  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  }
  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }
  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }

  registerAdmin(): void {
    let adminRegisterInput: AdminRegister = {
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value
    }

    this.http.post<AdminRegister>('http://localhost:5000/api/admin/register', adminRegisterInput).subscribe(
      {
        next: res => {
          this.globAdminRegister = res;
          this.router.navigateByUrl('');
        }
      }
    )

    // this.adminService.register(adminRegisterInput).subscribe(
    //   {
    //     next: response => {
    //       this.router.navigateByUrl('');
    //       console.log(response);
    //     },
    //   }
    // );
  }
}
