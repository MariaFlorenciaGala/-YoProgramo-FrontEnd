import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  imgError: any;

  constructor(private portfolioService:PortfolioService){}

  ngOnInit(): void {
      this.portfolioService.getDatos().subscribe(portfolio => {
        this.imgError = portfolio.imgError;
      })
  }

}
