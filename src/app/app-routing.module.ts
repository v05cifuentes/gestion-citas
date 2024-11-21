import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { validateUserGuard } from './guard/validateuser.guard';
import { UserComponent } from './components/user/user.component';
import { AgendaSalonesComponent } from './components/agenda-salones/agenda-salones.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, canActivate: [validateUserGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [validateUserGuard] },
      { path: 'user', component: UserComponent, canActivate: [validateUserGuard] },
      { path: 'agenda', component: AgendaSalonesComponent, canActivate: [validateUserGuard] },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },

  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
