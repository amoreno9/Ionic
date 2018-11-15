import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarventaPage } from '../../pages/agregarventa/agregarventa';
import { DetalleventaPage } from '../../pages/detalleventa/detalleventa';
import { LoginPage } from '../login/login';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) { 

  }

  ionViewDidLoad(){
    const modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  Agregar(){
    this.navCtrl.push(AgregarventaPage);
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
      title: 'Modifica tus productos',
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
            this.navCtrl.push(DetalleventaPage);
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
