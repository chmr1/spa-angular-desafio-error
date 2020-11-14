import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

interface Tipo {
  valor: string;
  texto: string;
}

@Component({
  selector: 'spa-contatos-cadastro',
  templateUrl: './contatos-cadastro.component.html',
  styleUrls: ['./contatos-cadastro.component.css']
})
export class ContatosCadastroComponent implements OnInit {

  readonly semFoto = './../../../assets/img/no-photo.jpg';
  tipos: Tipo[] = [
    {valor: 'Nenhum', texto: 'Nenhum'},
    {valor: 'Celular', texto: 'Celular'},
    {valor: 'Trabalho', texto: 'Trabalho'},
    {valor: 'Casa', texto: 'Casa'},
    {valor: 'Principal', texto: 'Principal'},
  ];

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  salvar(): void {
    const dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe(() => {
      this.salvarContato();
    });
  }

  salvarContato(): void {
    this.router.navigateByUrl('contatos');
  }

  cancelar(): void {
    this.router.navigateByUrl('contatos');
  }
}
