import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {SettingComponent} from './components/setting/setting.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard], 
    data: {authGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'login', 
    component: LoginComponent
  },
  { path: 'register', 
    component: RegisterComponent
  },
  { path: 'client/add', 
    component: AddClientComponent, 
    canActivate:[AngularFireAuthGuard], 
    data: {authGuardPipe: redirectUnauthorizedToLogin} 
  },
  { path: 'client/edit/:id', 
    component: EditClientComponent,
    canActivate:[AngularFireAuthGuard], 
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  { path: 'client/:id', 
    component: ClientDetailsComponent,
    canActivate: [AngularFireAuthGuard], 
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  { path: 'setting', 
    component: SettingComponent,
    canActivate:[AngularFireAuthGuard], 
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  { path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
