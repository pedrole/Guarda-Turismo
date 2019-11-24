import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, App } from 'ionic-angular';
import { WpProvider } from '../../providers/wp-provider';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Mapa } from '../mapa/mapa';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the DetalhesRestaurante page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'detalhes-local',
	templateUrl: 'detalhes-local.html',
})
export class DetalhesLocal {
	public local;
	url: string = ':8080/bo/wp-json/wp/v2/media?parent=';
	imagens: any;
	titulo;
	iconVisto: string = "";
	iconFavoritos: string = "";
	servidor: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
		public wpProvider: WpProvider, private http: Http, private app: App, private storage: Storage) {

		this.local = navParams.get("local");
		this.url = wpProvider.servidor + this.url + this.local.id;
		this.servidor = this.wpProvider.servidor;





	}
	ionViewDidEnter() {
		console.log(this.local.title.rendered);
		this.app.setTitle(this.local.title.rendered);
		this.titulo = this.local.title.rendered;
	}


	fetchImages() {

		this.wpProvider.createLoader();
		this.http.get(this.url)
			.map(res => res.json())
			.subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.imagens = data;
				this.getVisto();
				this.getFavorito();
				this.wpProvider.dismissLoading();
				
			}, error => {
				this.wpProvider.dismissLoading();
				//  this.errorMessage = <any>error
				console.log(<any>error);
			});



	}
	getVisto() {
		this.storage.get('locais_vistos_' + this.local.id.toString()).then((val) => {
			if (val) {
				this.iconVisto = "ios-checkmark-circle";

			} else {
				this.iconVisto = "ios-checkmark-circle-outline";
			}


		});
	}
	getFavorito() {
		this.storage.get('locais_favoritos_' + this.local.id.toString()).then((val) => {
			if (val) {
				this.iconFavoritos = "ios-heart";

			} else {
				this.iconFavoritos = "ios-heart-outline";
			}


		});
	}
	botaoVistoClick() {
		this.storage.get('locais_vistos_' + this.local.id.toString()).then((val) => {
			if (val) {
				this.storage.remove('locais_vistos_' + this.local.id.toString());
				this.iconVisto = "ios-checkmark-circle-outline";
			} else {
				this.storage.set('locais_vistos_' + this.local.id.toString(), this.local);
				this.iconVisto = "ios-checkmark-circle";
			}
		});

	}
	botaoFavoritoClick(){
		this.storage.get('locais_favoritos_' + this.local.id.toString()).then((val) => {
			if (val) {
				this.storage.remove('locais_favoritos_' + this.local.id.toString());
				this.iconFavoritos = "ios-heart-outline";
			} else {
				this.storage.set('locais_favoritos_' + this.local.id.toString(), this.local);
				this.iconFavoritos = "ios-heart";
			}
		});
	}



	ionViewDidLoad() {
		this.fetchImages();
	}

	adicionaLocal(getIcon: string) {
		this.storage.set('locais_vistos_' + this.local.id.toString(), this.local);
		this.storage.get('locais_vistos_' + this.local.id.toString()).then((val) => {
			console.log('o titulo é', val.title.rendered);
		});

		if (this.iconVisto === 'ios-checkmark-circle-outline') {
			//this.storage.set('locais_vistos_' + this.local.id.toString(), this.local.title.rendered);
			this.iconVisto = "ios-checkmark-circle";
		}
		else if (this.iconVisto === 'ios-checkmark-circle') {
			this.iconVisto = "ios-checkmark-circle-outline";
		}
	}
	presentLoading() {
		let loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		loader.present();
	}
	abreMapa() {

		this.navCtrl.push(Mapa, {
			local: this.local
		})
	}


}
