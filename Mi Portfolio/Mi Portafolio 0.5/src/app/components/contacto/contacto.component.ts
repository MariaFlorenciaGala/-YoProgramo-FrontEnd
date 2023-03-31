import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
contacteme: string = '';
introContacto: string = '';
telefono: string = '';
mail:string = '';
ubicacion:string = '';
constructor( private portfolioService:PortfolioService){}

ngOnInit(): void{
  this.portfolioService.getDatos().subscribe(portfolio => {
this.contacteme = portfolio.contacteme;
this.introContacto = portfolio.introContacto;
this.telefono = portfolio.telefono;
this.mail = portfolio.mail;
this.ubicacion = portfolio.ubicacion;
});
}
}
