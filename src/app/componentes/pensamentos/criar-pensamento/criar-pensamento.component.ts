import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo:'Angular',
    autoria: 'Dev',
    modelo:''
  }
  acoes ={
    id:'salvar',
  }

  public criarPensamento(){
    if(this.acoes.id == "salvar"){
      alert("Novo Pensamento criado");
    }else{
      alert("Cancelado")
    }
  }
  public cancelarPensamento(){
    alert('cancelado')

  }

  constructor() { }

  ngOnInit(): void {
  }

}
