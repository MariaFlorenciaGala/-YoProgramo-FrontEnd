import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importo mis componentes
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { MisproyectosComponent } from './components/misproyectos/misproyectos.component';
import { HardComponent } from './components/hard/hard.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { LoginComponent } from './components/header/login/login.component';
import { DashboardComponent } from './components/header/login/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component'


const routes: Routes = [
  {path: 'acerca-de-mi', component:AcercaDeMiComponent},
  {path: 'mis-proyectos', component:MisproyectosComponent},
  {path: 'hard-and-soft', component:HardComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'experiencia-laboral', component:ExperienciaLaboralComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
