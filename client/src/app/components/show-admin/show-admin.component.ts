import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.scss']
})
export class ShowAdminComponent {
  currentAdmin: Admin | null | undefined;

  constructor(private adminService: AdminService) {
   adminService.currentAdmin$.subscribe(
      adminResponse => this.currentAdmin = adminResponse
    );
  }

  // logout(): void {
  //   this.adminService.logout();
  
  //   this.currentAdmin = null;
  // }
}
