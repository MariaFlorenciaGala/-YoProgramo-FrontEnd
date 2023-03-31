import { Component, OnInit } from '@angular/core';
//Hay que importar el servicio para que se use en el componente 
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
//Acá hay que poner una variable de instancia en cada componente
//Defino las variables sino me tira error
  nombre: string = '';
  apellido: string = '';
  titulo: string = ''; 
  introduccion: string = '';
  imgHome: any;

  infoPorfolio: any;

  //Acá inyecto en servicio para tener acceso en la clase a los métodos
  constructor( private portfolioService: PortfolioService) {}

  ngOnInit(): void{
    this.portfolioService.getDatos().subscribe(portfolio => {
    //Definir informacion a mostrar
    this.nombre = portfolio.nombre;
    this.apellido = portfolio.apellido;
    this.titulo = portfolio.titulo;
    this.introduccion = portfolio.introduccion;
    this.imgHome = portfolio.imgHome;
  });
  }
}
