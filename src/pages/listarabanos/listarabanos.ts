import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarabonoPage } from '../../pages/agregarabono/agregarabono';
import { DetalleabonoPage } from '../../pages/detalleabono/detalleabono';

@Component({
  selector: 'page-listarabanos',
  templateUrl: 'listarabanos.html'
})
export class ListarabanosPage {

  constructor(public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController) { 

  }

  Agregar(){
    this.navCtrl.push(AgregarabonoPage);
  }

  mostrarConfirmacion() {
    const confirm = this.alertCtrl.create({
      title: '¿Esta usted seguro de eliminar el registro?',
      message: '¿Si realmente usted esta seguro de eliminarlo seleccionado?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si estoy seguro',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  presentarAcciones() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modifica tus abonos',
      buttons: [
        {
          text: 'Eliminar',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.mostrarConfirmacion();
          }
        },{
          text: 'Editar',
          icon: 'md-create',
          handler: () => {
            console.log('Archive clicked');
            this.navCtrl.push(DetalleabonoPage);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'logo-tux',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
