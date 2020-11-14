import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosCadastroComponent } from './contatos/contatos-cadastro/contatos-cadastro.component';
import { ContatosListaComponent } from './contatos/contatos-lista/contatos-lista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contatos',
    pathMatch: 'full'
  },
  {
    path: 'contatos',
    children: [
      {
        path: '',
        component: ContatosListaComponent
      },
      {
        path: 'cadastro',
        component: ContatosCadastroComponent
      }
    ]
  },
  { path: '**', redirectTo: 'contatos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
