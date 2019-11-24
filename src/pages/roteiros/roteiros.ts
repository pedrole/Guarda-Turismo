import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController, Searchbar, Navbar} from 'ionic-angular';
import { WpProvider } from '../../providers/wp-provider';
import { Http } from '@angular/http';
import { DetalhesRoteiroPage } from '../detalhes-roteiro/detalhes-roteiro';
import  'rxjs/add/operator/timeout';

/**
 * Generated class for the RoteirosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-roteiros',
	templateUrl: 'roteiros.html',
})
export class RoteirosPage {
	url: string = ':8080/bo/wp-json/wp/v2/posts?_embed&categories=36';
	loading: Loading;
	roteiros: any;
	roteirosOriginais: any;
	servidor: any;
	categorias: any;
	radioResult = 'nome';
	radioOpen: boolean;
	checkboxOpen: boolean;
	checkboxResult;
	isSearch = false;

	@ViewChild('searchbar') searchbar: Searchbar;
	@ViewChild('navbar') navbar: Navbar;

	constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
		public wpProvider: WpProvider, private loadingCtrl: LoadingController , public alerCtrl: AlertController) {
		this.url = this.wpProvider.servidor + this.url;
		this.servidor = this.wpProvider.servidor;
		this.getRoteiros();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RoteirosPage');
	}

	getRoteiros() {
		this.createLoader();
		this.loading.present().then(() => {
			this.http.get(this.url)
				.timeout(3000)
				.map(res => res.json())
				.subscribe(data => {
					this.roteiros = data;
					this.roteiros.sort(this.ordenarPorNome);
					this.roteirosOriginais = this.roteiros;
					this.getCategorias();

					//	this.setGrid();
				}, error => {
					this.loading.dismiss();
					//	this.errorMessage = <any>error
					console.log(<any>error);

				});
			console.log('segundo');
		});
		console.log('terceiro');
	}
	getCategorias() {
		let url: string = ':8080/bo/wp-json/wp/v2/categories?parent=';
		url = this.wpProvider.servidor + url + '36';

		this.http.get(url)
			.map(res => res.json())
			.subscribe(data => {
				 this.categorias = data;
				this.setCategoria();
				this.getLocais();
			//	this.loading.dismiss();
			}, error => {
				this.loading.dismiss();
				//	this.errorMessage = <any>error
				console.log(<any>error);

			});

	}

	getLocais() {
		let url: string = ':8080/bo/wp-json/wp/v2/posts?_embed&categories=';
		url = this.wpProvider.servidor + url + this.wpProvider.LocaisID;

		this.http.get(url)
			.map(res => res.json())
			.subscribe(data => {
				let locais = data;
				this.setLocais(locais);
				this.loading.dismiss();
			}, error => {
				this.loading.dismiss();
				//	this.errorMessage = <any>error
				console.log(<any>error);

			});


	}



	setLocais(locais: any) {

		for (var roteiro of this.roteiros) {
			
			roteiro.locais = [];
			roteiro.locais.toString = function(){
				var	resultado = '';
				  for(var local of this){
				  	resultado += local.title.rendered + ",";
				  }
				  return resultado;
			}
			for (var local of locais) {
				if (local.acf.roteiros && local.acf.roteiros.includes(roteiro.slug)) {
					roteiro.locais.push(local);
					console.log(local.title.rendered)
					
				}
			}
		}
	}



	setCategoria() {

		for (var roteiro of this.roteiros) {
			for (var categoria of this.categorias) {
				if (roteiro.categories.includes(categoria.id)) {
					roteiro.categoria = categoria;
					break;
				}
			}
		}


	}
	abreDetalhes(item): void {
		this.navCtrl.push(DetalhesRoteiroPage, {
			roteiro: item
		})

	}



	createLoader(message: string = "Por favor aguarde...") { // Optional Parameter
		this.loading = this.loadingCtrl.create({
			content: message
		});
	}
ordenarPorNome(a, b) {

		if (a.title.rendered < b.title.rendered) return -1;
		if (a.title.rendered > b.title.rendered) return 1;
		return 0;

	}
	ordenarPorTipo(a, b) {

		if (a.categoria.name < b.categoria.name) return -1;
		if (a.categoria.name > b.categoria.name) return 1;
		return 0;

	}
	tiposFiltrados: Array<any>=[];

	selecionaFiltro() {
		let alert = this.alerCtrl.create();
		alert.setTitle('Filtrar por tipo');

		for (var categoria of this.categorias) {
			//console.log("categoria " + categoria.id + " " + categoria.name)
			alert.addInput({
				type: 'checkbox',
				label: categoria.name,
				value: categoria,
				checked: this.tiposFiltrados.indexOf(categoria) > -1
				//checked: this.tiposFiltrados.id == categoria.id
				//checked: this.tiposFiltrados.includes(categoria.id)
			});

		}



		alert.addButton('Cancelar');
		alert.addButton({
			text: 'OK',
			handler: data => {
				console.log('Checkbox data:' + data);
				this.checkboxOpen = false;
				this.checkboxResult = data;
				this.tiposFiltrados = this.checkboxResult;
			//	this.tiposFiltrados = this.checkboxResult.toString().split(",");
				this.filtraPorTipo();
			}
		});
		alert.present().then(() => {
			this.checkboxOpen = true;
		});



	}
	filtraPorTipo() {
		this.roteiros = this.roteirosOriginais;
		if (this.tiposFiltrados.length > 0/* && this.tiposFiltrados[0].length > 0*/) {
			console.log(this.tiposFiltrados);
		//	this.locais = this.tiposFiltrados;
			this.roteiros = this.roteiros.filter((local) => {
				//return (local.acf.tipo.indexOf(val.toLowerCase()) > -1);
				//return (this.tiposFiltrados.indexOf(local.acf.tipo) > -1);
				return (this.tiposFiltrados.indexOf(local.categoria) > -1);
			})

		}

	}
	
	selecionarOrdenacao() {
		let alert = this.alerCtrl.create();
		alert.setTitle('Ordenar por:');

		alert.addInput({
			type: 'radio',
			label: 'Nome',
			value: 'nome',
			checked: (this.radioResult == 'nome')
		});

		alert.addInput({
			type: 'radio',
			label: 'Categoria',
			value: 'categoria',
			checked: (this.radioResult == 'categoria')
		});


		alert.addButton('Cancelar');
		alert.addButton({
			text: 'Ok',
			handler: data => {
				console.log('Radio data:' + data);
				this.radioOpen = false;
				this.radioResult = data;
				let propriedade;
				if (data == 'nome') {
					//propriedade = 'title.rendered';
					this.roteiros.sort(this.ordenarPorNome);
				}
				else if (data == 'categoria') {
					//propriedade = 'acf.tipo';
					this.roteiros.sort(this.ordenarPorTipo);
				}
				//this.locais.sort(this.ordenar(propriedade));
			}
		});

		alert.present().then(() => {
			this.radioOpen = true;
		});
	}
	getItems(ev) {
		// Reset items back to all of the items
		//this.initializeItems();
		this.roteiros = this.roteirosOriginais;
		//	this.getLocais2();
		console.log(this.roteiros[0].title.rendered + this.roteiros.length);

		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			console.log('val:' + val)
			this.roteiros = this.roteiros.filter((roteiro) => {
				return (roteiro.title.rendered.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})

		}
	}
	mostraSearchBar() {

		this.isSearch = !this.isSearch;
		if (this.isSearch) {
			setTimeout(() => {
				this.searchbar.setFocus();
				this.navbar.hideBackButton = true;
			});
		}
	}
	

}
