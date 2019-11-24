import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController,Loading } from 'ionic-angular';
import 'rxjs/add/operator/map';


export class Poste {

	constructor(public authorId: number, public id: number, public title: string, public content: string, public excerpt: string, public date: string, public mediaId?: number) { }
}

export class User {
	constructor(public id: number, public name: string, public userImageUrl: string) { }
}

@Injectable()
export class WpProvider {
	users: User[];
	loading: Loading;
	LocaisID = 9;
	atracoesID = 10;

	constructor( public loadingCtrl: LoadingController) {
		console.log('Hello WpProvider Provider');
	}
//	public servidor: String = 'http://192.168.1.97';
	public servidor: String = 'http://localhost';

	presentLoading() {
		this.loading = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 10000
		});
		this.loading.present();
	}

	dismissLoading(){
		this.loading.dismiss();
	}
	createLoader(message: string = "Por favor aguarde...") { // Optional Parameter
		this.loading = this.loadingCtrl.create({
			content: message
		});
	}

}
