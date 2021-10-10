import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.page.html',
  styleUrls: ['./caixa.page.scss'],
})
export class CaixaPage implements OnInit {

  qtdeCedulasCem: number = 0.0
  valorCedulasCem: number = 0.0
  qtdeCedulasCinquenta: number = 0.0
  valorCedulasCinquenta: number = 0.0
  qtdeCedulasVinte: number = 0.0
  valorCedulasVinte: number = 0.0
  qtdeCedulasDez: number = 0.0
  valorCedulasDez: number = 0.0
  qtdeCedulasCinco: number = 0.0
  valorCedulasCinco: number = 0.0
  qtdeCedulasDois: number = 0.0
  valorCedulasDois: number = 0.0
  valorMoedas: number = 0.0
  valorTotal: number = 0.0

  constructor() { }

  ngOnInit() {}

  calculoPorCedulas(tipoCedula){
    switch(tipoCedula){
      case 100:{
        this.valorCedulasCem = this.qtdeCedulasCem * tipoCedula
        this.total()
        break
      }
      case 50:{
        this.valorCedulasCinquenta = this.qtdeCedulasCinquenta * tipoCedula
        this.total()
        break
      }
      case 20:{
        this.valorCedulasVinte = this.qtdeCedulasVinte * tipoCedula
        this.total()
        break
      }
      case 10:{
        this.valorCedulasDez = this.qtdeCedulasDez * tipoCedula
        this.total()
        break
      }
      case 5:{
        this.valorCedulasCinco = this.qtdeCedulasCinco * tipoCedula
        this.total()
        break
      }
      case 2:{
        this.valorCedulasDois = this.qtdeCedulasDois * tipoCedula
        this.total()
        break
      }
      case 'moeda':{
        this.total()
        break
      }
      default:
        this.total()
    }
  }

  total(){
    this.valorTotal = this.valorCedulasCem + this.valorCedulasCinquenta + this.valorCedulasVinte + 
        this.valorCedulasDez + this.valorCedulasCinco + this.valorCedulasDois + this.valorMoedas;
  }
}
