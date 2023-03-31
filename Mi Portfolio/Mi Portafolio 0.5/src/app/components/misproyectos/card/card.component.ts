import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  proyectos:any = [];


  constructor( private portfolioService:PortfolioService){}

  ngOnInit(): void {
      this.portfolioService.getDatos().subscribe( portfolio =>{
        this.proyectos = portfolio.proyectos;
  })
}
}
