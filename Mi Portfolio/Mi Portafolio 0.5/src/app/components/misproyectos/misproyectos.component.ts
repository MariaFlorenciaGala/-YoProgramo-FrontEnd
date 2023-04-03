import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-misproyectos',
  templateUrl: './misproyectos.component.html',
  styleUrls: ['./misproyectos.component.css']
})
export class MisproyectosComponent implements OnInit{

  introProyectos: string = ''; 

  constructor( private portfolioService: PortfolioService){}
  ngOnInit():void{
    this.portfolioService.getDatos().subscribe(portfolio => {
      this.introProyectos = portfolio.introProyectos;
    })
  }
}
