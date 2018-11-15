import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListarclientesPage } from '../pages/listarclientes/listarclientes';
import { ListarproductosPage } from '../pages/listarproductos/listarproductos';
import { ListarabanosPage } from '../pages/listarabanos/listarabanos';
import { AgregarventaPage } from '../pages/agregarventa/agregarventa';
import { DetalleventaPage } from '../pages/detalleventa/detalleventa';
import { AgregarclientePage } from '../pages/agregarcliente/agregarcliente';
import { DetalleclientePage } from '../pages/detallecliente/detallecliente';
import { AgregarproductoPage } from '../pages/agregarproducto/agregarproducto';
import { DetalleproductoPage } from '../pages/detalleproducto/detalleproducto';
import { AgregarabonoPage } from '../pages/agregarabono/agregarabono';
import { DetalleabonoPage } from '../pages/detalleabono/detalleabono';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AgregarventaPage,
    DetalleventaPage,
    AgregarclientePage,
    DetalleclientePage,
    ListarclientesPage,
    ListarproductosPage,
    AgregarproductoPage,
    DetalleproductoPage,
    ListarabanosPage,
    AgregarabonoPage,
    DetalleabonoPage,
    LoginPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AgregarventaPage,
    DetalleventaPage,
    AgregarclientePage,
    DetalleclientePage,
    ListarclientesPage,
    ListarproductosPage,
    AgregarproductoPage,
    DetalleproductoPage,
    ListarabanosPage,
    AgregarabonoPage,
    DetalleabonoPage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
