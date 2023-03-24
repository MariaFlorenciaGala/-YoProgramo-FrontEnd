import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent  {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService){ }

  ngOnInit():void{
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

  }


