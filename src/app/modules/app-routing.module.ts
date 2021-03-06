import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { VisitorHistoryComponent } from '../components/visitor-history/visitor-history.component';
import { VisitorLogComponent } from '../components/visitor-log/visitor-log.component';
import { LoginComponent } from '../components/login/login.component';
import { LeaderboardComponent } from '../components/leaderboard/leaderboard.component';
import { NewLogComponent } from '../components/new-log/new-log.component';
import { RegisterComponent } from '../components/register/register.component';
import { CreateAccountComponent } from '../components/create-account/create-account.component';


const routes: Routes = [
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'frequencies', component: LeaderboardComponent },
  { path: 'newLog', component: NewLogComponent },
  { path: 'visitHistory', component: VisitorHistoryComponent},
  { path: 'visitorLog/:id', component: VisitorLogComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
