import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Error state matcher
import { ErrorStateMatcher } from '@angular/material/core';
import { DefaultErrorStateMatcher } from './default-error-state.matcher';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AddPresidentComponent } from './components/add-president/add-president.component';
import { AddVoteComponent } from './components/add-vote/add-vote.component';
import { ListVotesComponent } from './components/list-votes/list-votes.component';
import { ListPresidentsComponent } from './components/list-presidents/list-presidents.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { PracticeComponent } from './components/practice/practice.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { ShowAdminComponent } from './components/show-admin/show-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPresidentComponent,
    AddVoteComponent,
    ListVotesComponent,
    ListPresidentsComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    PracticeComponent,
    RegisterAdminComponent,
    ShowAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: DefaultErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
