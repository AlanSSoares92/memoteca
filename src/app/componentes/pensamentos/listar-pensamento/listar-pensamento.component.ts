import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listarPensamentos = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
