import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
nombre: String = '';

  constructor(private portfolioService:PortfolioService){}
  ngOnInit(): void {
      this.portfolioService.getDatos().subscribe(portfolio =>{
        this.nombre = portfolio.nombre;
      })
  }

}
