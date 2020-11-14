import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'spa-contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  readonly semFoto = './../../../assets/img/avatar.png';
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listarContatos();
  }

  private listarContatos(): void {
    this.contatos = this.contatoService.listaTodosContatos();
  }

}