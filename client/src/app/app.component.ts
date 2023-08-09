import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';
import { Admin } from './models/admin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    // const adminString = localStorage.getItem('admin'); // get admin from broswer's localStorage

    // if (adminString){
    //   const admin: Admin = JSON.parse(adminString);

    //   this.adminService.setCurrentAdmin(admin);
    // }
  }
}
