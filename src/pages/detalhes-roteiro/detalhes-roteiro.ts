import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WpProvider } from '../../providers/wp-provider';
import {Mapa} from '../mapa/mapa';
import { DetalhesLocal } from '../detalhes-local/detalhes-local';

/**
 * Generated class for the DetalhesRoteiroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-detalhes-roteiro',
	templateUrl: 'detalhes-roteiro.html',
})
export class DetalhesRoteiroPage {
	roteiro: any;
	servidor: any;

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public wpProvider: WpProvider) {

		this.roteiro = navParams.get("roteiro");
		this.servidor = this.wpProvider.servidor;
		this.setDistancia();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetalhesRoteiroPage');
	}
	setDistancia() {

		for (var i = 0; i < this.roteiro.locais.length-1; i++) {
			/*	console.log(this.roteiro.locais[i+1].acf.latitude);
				console.log(this.roteiro.locais[i+1].acf.longitude);*/
				let distancia = this.getDistance(this.roteiro.locais[i],this.roteiro.locais[i+1]);
				console.log('distancia: ' + distancia)
				this.roteiro.locais[i].distancia = distancia;

		}
	}
	rad(x) {
		return x * Math.PI / 180;
	};

	getDistance(local1, local2) {
		var R = 6378137; // Earth’s mean radius in meter
		var dLat = this.rad(local2.acf.latitude - local1.acf.latitude);
		var dLong = this.rad(local2.acf.longitude - local1.acf.longitude);
		var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(this.rad(local1.acf.latitude)) * Math.cos(this.rad(local2.acf.latitude)) *
			Math.sin(dLong / 2) * Math.sin(dLong / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c;
		return d; // returns the distance in meter
	};

	abreMapa(): void {
		this.navCtrl.push(Mapa, {
			locais: this.roteiro.locais
		})

	}
	abreDetalhes(local): void {
		this.navCtrl.push(DetalhesLocal, {
			local: local
		})

	}

}
