import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent  {
nombre: String = '';
apellido: String = '';
acerca: String = '';

imgAcerca: any;


  constructor(private portfolioService:PortfolioService){ }

  ngOnInit():void{
    this.portfolioService.getDatos().subscribe(portfolio => {
      this.nombre = portfolio.nombre;
      this.apellido = portfolio.apellido;
      this.acerca = portfolio.acerca;
      this.imgAcerca = portfolio.imgAcerca
    });
  }
}
