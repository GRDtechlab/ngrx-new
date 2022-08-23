import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StatusComponent } from './status/status.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { EventdetComponent } from './eventdet/eventdet.component';
import { EventtableComponent } from './eventtable/eventtable.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: 'status', component: StatusComponent,canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignupComponent },
  { path: '', component: LandingComponent },
  {path:"e/:id",component:EventdetComponent},
  {path:"eventtable/:id",component:EventtableComponent},
  {path: 'register',component: RegisterComponent,canActivate:[AuthGuard]},

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
