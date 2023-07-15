import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddPresidentComponent } from './components/add-president/add-president.component';
import { AddVoteComponent } from './components/add-vote/add-vote.component';
import { ListPresidentsComponent } from './components/list-presidents/list-presidents.component';
import { ListVotesComponent } from './components/list-votes/list-votes.component';
import { AdminComponent } from './components/admin/admin.component';
import { PracticeComponent } from './components/practice/practice.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add-president', component: AddPresidentComponent},
  {path: 'add-vote', component: AddVoteComponent},
  {path: 'list-presidents', component: ListPresidentsComponent},
  {path: 'list-votes', component: ListVotesComponent},
  {path: 'task', component: PracticeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
