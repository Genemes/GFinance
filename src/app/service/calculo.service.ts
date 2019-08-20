import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  objService: any = {
    saldoDev: null,
    vencimento: new Date()
  }

  constructor() { }

  calculaSaldoDevedor(juros, valor, numParcelas, operacao) {
    
    if(operacao === 'consignado'){
      juros = (juros / 100.0);
    }else if(operacao === 'consorcio'){
      juros = (juros / 100.0) / 12
    }else{
      console.log('Erro')
    }
    this.objService.saldoDev = valor / juros * ( 1 - Math.pow(1 + juros, -numParcelas) );
    this.objService.vencimento = this.calcularVencimento(numParcelas);
    return this.objService
  }

  calcularVencimento(numParcelas){
    let currentTime = new Date();
    let dia = 1;
    let mes = (currentTime.getMonth());
    let ano = currentTime.getFullYear();

    for(let i=1; i <= numParcelas; ++i){
        mes++;
        if(mes>12){
            mes = 1;
            ano++;
        }
    }
    if(mes == 1){
      dia = 28;
    }else{
      dia = 30;
    }
    //criando novo date com valores setados
    let data  = new Date(ano, mes, dia);
    return data;
  }
}
