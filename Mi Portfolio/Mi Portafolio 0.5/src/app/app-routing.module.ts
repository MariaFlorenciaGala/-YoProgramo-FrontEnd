import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//Importo mis componentes
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { MisproyectosComponent } from './components/misproyectos/misproyectos.component';
import { HardComponent } from './components/hard/hard.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { DashboardComponent } from './components/header/login/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component'
import { LogInComponent } from './components/header/login/log-in/log-in.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'acercaDeMi', component:AcercaDeMiComponent},
  {path: 'misProyectos', component:MisproyectosComponent},
  {path: 'hardAndSoft', component:HardComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'experienciaLaboral', component:ExperienciaLaboralComponent},
  {path: 'login', component:LogInComponent},
  {path: 'dashboard', component:DashboardComponent, //canActivate:[AuthGuard],
},
  {path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
