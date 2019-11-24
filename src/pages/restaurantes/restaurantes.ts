import { Component } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { WpProvider, Poste } from '../../providers/wp-provider';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetalhesLocal } from '../detalhes-local/detalhes-local';


/**
 * Generated class for the Restaurantes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
	selector: 'page-restaurantes',
	templateUrl: 'restaurantes.html',
})
export class Restaurantes {
	url: string = ':8080/bo/wp-json/wp/v2/posts?categories=';
	items: any;
	loading: Loading;


	constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, 
		public wpProvider: WpProvider, private loadingCtrl: LoadingController) {
		this.url = this.wpProvider.servidor +  this.url + navParams.get("categoriaId");
		console.log(this.url);

	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad Restaurantes');
		this.createLoader();
		this.loading.present().then(() => {
			this.http.get(this.url)
				.map(res => res.json())
				.subscribe(data => {
					// we've got back the raw data, now generate the core schedule data
					// and save the data for later reference
					this.loading.dismiss();
					this.items = data;
				}, error => {
					this.loading.dismiss();
					//	this.errorMessage = <any>error
					console.log(<any>error);
				});
		});
	}
	abreDetalhes(event, item): void {
		console.log('' + item.title.rendered);
		console.log('' + item.id);
		this.navCtrl.push(DetalhesLocal, {
			localId: item.id,
			local: item
		})

	}
	createLoader(message: string = "Por favor aguarde...") { // Optional Parameter
		this.loading = this.loadingCtrl.create({
			content: message
		});
	}

}
