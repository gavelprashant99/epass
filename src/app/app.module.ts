import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { NavbarComponent } from './admin/navbar/navbar.component';
import { GenerateTicketComponent } from './admin/generate-ticket/generate-ticket.component';
import { OpenTicketComponent } from './admin/open-ticket/open-ticket.component';
import { LoginComponent } from './admin/login/login.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HomeComponent } from './admin/home/home.component';
import { ContactUsComponent } from './admin/contact-us/contact-us.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AboutUsComponent } from './about-us/about-us.component';
import { AfterLoginComponent } from './admin/after-login/after-login.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenerateTicketComponent,
    OpenTicketComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
