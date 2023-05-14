import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { LogoAPComponent } from './components/header/logo-ap/logo-ap.component';
import { CardComponent } from './components/misproyectos/card/card.component';
import { RedesComponent } from './components/header/redes/redes.component';
import { CalculadoraComponent } from './components/misproyectos/proyectos/calculadora/calculadora.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PokedeskComponent } from './components/misproyectos/pokedesk/pokedesk.component';
import { LogInComponent } from './components/header/login/log-in/log-in.component';



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
    RedesComponent,
    CalculadoraComponent,
    ErrorComponent,
    PokedeskComponent,
    LogInComponent,
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
