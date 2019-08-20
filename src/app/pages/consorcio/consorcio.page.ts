import { CalculoService } from './../../service/calculo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consorcio',
  templateUrl: './consorcio.page.html',
  styleUrls: ['./consorcio.page.scss'],
})
export class ConsorcioPage {

  saldoDev: number = 0.0
  visivel: boolean = true
  consorcio: any = {
    valor: null,
    quantidadeParcelas: null,
    juros: 8.55,
    vencimento: new Date()
  }
  objService: any

  constructor(private service: CalculoService) {}

  calcular() {
    let operacao = 'consorcio'
    this.objService = this.service.calculaSaldoDevedor(
      this.consorcio.juros, this.consorcio.valor,
      this.consorcio.quantidadeParcelas, operacao)

    this.consorcio.vencimento = this.objService.vencimento
    this.saldoDev = this.objService.saldoDev
    
    this.onClick()
  }

  onClick(){
    //Altera CSS para visualizar e esconder div com resultado
    return this.visivel = !this.visivel
  }

}