import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { SignupComponent } from './signup/signup.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { JobsappliedComponent } from './jobsapplied/jobsapplied.component';

const routes: Routes = [
 
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'jobs', component:JobsComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'about', component:AboutComponent, canActivate:[RoleGuard]},
  {path:'applyjobs', component:ApplyjobComponent},
  {path :'appliedjobs', component:JobsappliedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
