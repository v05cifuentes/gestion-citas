import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { validateUserGuard } from './guard/validateuser.guard';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [


  {
    path: '', component: NavbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'user', component: UserComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
