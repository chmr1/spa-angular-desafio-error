import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { ContatosListaComponent } from './contatos/contatos-lista/contatos-lista.component';
import { ContatosCadastroComponent } from './contatos/contatos-cadastro/contatos-cadastro.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    ContatosListaComponent,
    ContatosCadastroComponent,
    DialogComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
