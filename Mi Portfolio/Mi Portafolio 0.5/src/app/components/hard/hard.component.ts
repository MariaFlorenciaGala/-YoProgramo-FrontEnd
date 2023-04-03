import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit{

  hardSkills :any = [];
  softSkills :any = [];

  constructor(private portfolioService:PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      this.hardSkills = portfolio.hardSkills;
      this.softSkills = portfolio.softSkills;
    })

  }
  }
