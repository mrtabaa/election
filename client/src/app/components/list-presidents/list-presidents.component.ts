import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { President } from 'src/app/models/president.model';

@Component({
  selector: 'app-list-presidents',
  templateUrl: './list-presidents.component.html',
  styleUrls: ['./list-presidents.component.scss']
})
export class ListPresidentsComponent {
  presidents: President[] | undefined;

  constructor(private http: HttpClient) { }

  showPresidents(): void {
    this.http.get<President[]>('http://localhost:5000/api/president/get-all').subscribe(
      {next: response => this.presidents = response}
    );
  }
}
