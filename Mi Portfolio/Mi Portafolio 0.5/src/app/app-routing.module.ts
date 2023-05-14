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
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'sobreMi', component:AcercaDeMiComponent},
  {path: 'misProyectos', component:MisproyectosComponent},
  {path: 'hardAndSoft', component:HardComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'experienciaLaboral', component:ExperienciaLaboralComponent},
  {path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
