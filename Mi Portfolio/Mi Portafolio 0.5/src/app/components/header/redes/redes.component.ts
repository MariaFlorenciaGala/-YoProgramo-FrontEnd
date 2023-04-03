import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit{
  redes: any = [];

  constructor( private portfolioService:PortfolioService){}

  ngOnInit(): void {
      this.portfolioService.getDatos().subscribe(portfolio => {
        this.redes = portfolio.redes;
      })
  }
}
