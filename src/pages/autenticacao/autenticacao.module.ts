import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Autenticacao } from './autenticacao';

@NgModule({
  declarations: [
    Autenticacao,
  ],
  imports: [
    IonicPageModule.forChild(Autenticacao),
  ],
  exports: [
    Autenticacao
  ]
})
export class AutenticacaoModule {}
