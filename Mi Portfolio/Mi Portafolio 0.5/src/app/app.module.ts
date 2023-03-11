import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { RedesComponent } from './components/redes/redes.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { MisproyectosComponent } from './components/misproyectos/misproyectos.component';
import { HardComponent } from './components/hard/hard.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CardComponent } from './components/card/card.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    RedesComponent,
    AcercaDeMiComponent,
    NavbarComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    MisproyectosComponent,
    HardComponent,
    ContactoComponent,
    CardComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
        NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
