import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-flor';
  nombre: String = '';

  constructor(private portfolioService:PortfolioService){}
  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      this.nombre = portfolio.nombre;
  });
}
}
