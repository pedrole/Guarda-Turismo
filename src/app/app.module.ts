import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriasLocais } from '../pages/categorias_locais/categorias_locais';
import { Restaurantes } from '../pages/restaurantes/restaurantes';
import { Locais } from '../pages/locais/locais';
import { DetalhesLocal } from '../pages/detalhes-local/detalhes-local';
import { Mapa } from '../pages/mapa/mapa';
import { HttpModule } from '@angular/http';
import {RoteirosPage} from '../pages/roteiros/roteiros';
import {DetalhesRoteiroPage} from '../pages/detalhes-roteiro/detalhes-roteiro';
  

import { Http } from '@angular/http';

import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WpProvider } from '../providers/wp-provider';
import { IonicStorageModule } from '@ionic/storage'

//import { Locais } from '../pages/locais/locais';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriasLocais,
    Mapa,
    Restaurantes,
    DetalhesLocal,
    Locais,
    RoteirosPage,
    DetalhesRoteiroPage


  ],
  imports: [
    BrowserModule,
    HttpModule,

    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoriasLocais,
    Mapa,
    Restaurantes,
    DetalhesLocal,
    Locais,
    RoteirosPage,
    DetalhesRoteiroPage



  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    WpProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
