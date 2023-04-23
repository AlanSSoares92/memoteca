import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamento: Pensamento[] = [
  /*  {
    conteudo:'Passo informações para o componente filho',
    autoria: 'Componente Pai',
    modelo: 'modelo3',
    },
    {
    conteudo:'Minha propriedade é decorada com @input()',
    autoria: 'Componente filho',
    modelo: 'modelo2',
    }*/
  ]

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamento) =>{
      this.listaPensamento = listaPensamento
    })
  }

}
