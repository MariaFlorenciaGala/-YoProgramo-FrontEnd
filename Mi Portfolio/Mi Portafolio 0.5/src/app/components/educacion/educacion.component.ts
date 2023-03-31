import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  cursos: any = [];

  constructor(private portfolioService:PortfolioService){}

  ngOnInit():void{
  this.portfolioService.getDatos().subscribe( portfolio => {
    this.cursos = portfolio.cursos
  })
}
}
