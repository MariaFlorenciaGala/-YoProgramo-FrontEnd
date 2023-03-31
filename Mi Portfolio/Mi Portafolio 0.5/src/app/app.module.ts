import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { MisproyectosComponent } from './components/misproyectos/misproyectos.component';
import { HardComponent } from './components/hard/hard.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { LogoAPComponent } from './components/header/logo-ap/logo-ap.component';
import { LoginComponent } from './components/header/login/login.component';
import { CardComponent } from './components/misproyectos/card/card.component';
import { DashboardComponent } from './components/header/login/dashboard/dashboard.component';
import { RedesComponent } from './components/header/redes/redes.component';
import { HomeEditComponent } from './components/header/login/dashboard/home-edit/home-edit.component';
import { AcercaDeMiEditComponent } from './components/header/login/dashboard/acerca-de-mi-edit/acerca-de-mi-edit.component';
import { ContactoEditComponent } from './components/header/login/dashboard/contacto-edit/contacto-edit.component';
import { ExperienciaLaboralEditComponent } from './components/header/login/dashboard/experiencia-laboral-edit/experiencia-laboral-edit.component';
import { HardEditComponent } from './components/header/login/dashboard/hard-edit/hard-edit.component';
import { MisProyectosEditComponent } from './components/header/login/dashboard/mis-proyectos-edit/mis-proyectos-edit.component';
import { EducacionEditComponent } from './components/header/login/dashboard/educacion-edit/educacion-edit.component';
import { CardEditComponent } from './components/header/login/dashboard/mis-proyectos-edit/card-edit/card-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraComponent } from './components/misproyectos/proyectos/calculadora/calculadora.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeMiComponent,
    NavbarComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    MisproyectosComponent,
    HardComponent,
    ContactoComponent,
    CopyrightComponent,
    LogoAPComponent,
    CardComponent,
    LoginComponent,
    DashboardComponent,
    RedesComponent,
    HomeEditComponent,
    AcercaDeMiEditComponent,
    ContactoEditComponent,
    ExperienciaLaboralEditComponent,
    HardEditComponent,
    MisProyectosEditComponent,
    EducacionEditComponent,
    CardEditComponent,
    CalculadoraComponent,
    ErrorComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
