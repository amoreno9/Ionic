import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarabanosPage } from './listarabanos';

@NgModule({
  declarations: [
    ListarabanosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarabanosPage),
  ],
})
export class ListarabanosPageModule {}
