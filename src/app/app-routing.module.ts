import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AfterLoginComponent } from './admin/after-login/after-login.component';
import { ContactUsComponent } from './admin/contact-us/contact-us.component';
import { GenerateTicketComponent } from './admin/generate-ticket/generate-ticket.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { OpenTicketComponent } from './admin/open-ticket/open-ticket.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'menu', component: NavbarComponent},
{path: 'generate-ticket', component: GenerateTicketComponent}, 
{path: 'open-ticket', component: OpenTicketComponent},
{path: 'contact-us', component: ContactUsComponent},
{path: 'about-us', component: AboutUsComponent},
{path: 'login', component: LoginComponent},
{path:'after-login', component:AfterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
