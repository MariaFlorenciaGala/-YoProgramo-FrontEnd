import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit{
  experiencias: any = [];
  puestos: any = [];

  constructor( private portfolioService:PortfolioService){}

  ngOnInit(): void {
      this.portfolioService.getDatos().subscribe(portfolio =>{
        this.experiencias = portfolio.experiencias;
        this.puestos = this.experiencias.puestos;
      })
  }

}
