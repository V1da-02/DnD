import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FalseLinkComponent } from './false-link/false-link.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'**', component:FalseLinkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
