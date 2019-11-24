import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { DetalhesLocal } from '../detalhes-local/detalhes-local';
import { WpProvider } from '../../providers/wp-provider';

declare var google;

@Component({
	selector: 'page-mapa',
	templateUrl: 'mapa.html',
})

export class Mapa {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	url: string = ':8080/bo/wp-json/wp/v2/posts?_embed&categories=';
	items: any;
	item: any;
	loader: any;
	minhaLocalizacao: any;
	localizacaoDestino: any;
	servidor: any;



	@HostListener('click', ['$event.target'])
	publishEvent(target) {

		(target.getAttribute('id')) ? (this.abreDetalhe()) : "";
	}



	constructor(public navCtrl: NavController, public geolocation: Geolocation, private http: Http,
		public wpProvider: WpProvider, public loadingCtrl: LoadingController, public navParams: NavParams) {
		console.log('atracoesID: ' + wpProvider.atracoesID);
		this.url = wpProvider.servidor + this.url + this.wpProvider.LocaisID;
		this.servidor = this.wpProvider.servidor;
		this.item = this.navParams.get("local");
		this.items = this.navParams.get("locais");

	}

	ionViewDidLoad() {
		this.presentLoading();
		this.loadMap();

		this.loader.dismiss();

	}

	getTodosLocais() {


		this.http.get(this.url)
			.map(res => res.json())
			.subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.items = data;

				for (var item of this.items) {
					if (item.acf.latitude != null)
						this.adcicionaLocal(item);
				}


			});

	}
	adicionaLocais() {
		for (var item of this.items) {
			if (item.acf.latitude != null)
				this.adcicionaLocal(item);
		}
	}

	loadMap() {

		this.geolocation.getCurrentPosition().then((position) => {
			var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = new google.maps.DirectionsRenderer(
				{
					suppressMarkers: true
				});

			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


			let mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


			var marker = new google.maps.Marker({
				position: latLng,
				map: this.map,
				animation: google.maps.Animation.DROP,
				//icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png',
				icon: 'assets/bluedot.png',
				title: 'Hello World!'
			});
			this.minhaLocalizacao = latLng;
			directionsDisplay.setMap(this.map);
			if (!this.item && !this.items)
				this.getTodosLocais();
			else if (this.items) {
				this.adicionaLocais();
			}
			else {
				this.adcicionaLocal(this.item);
				this.calculateAndDisplayRoute(directionsService, directionsDisplay);
			}

		}, (err) => {
			console.log(err);
		});

	}
	addMarker() {

		let marker = new google.maps.Marker({
			map: this.map,
			animation: google.maps.Animation.DROP,
			position: this.map.getCenter()

		});

		let content = "<h4>Information!</h4>";

		this.addInfoWindow(marker, content);

	}
	calculateAndDisplayRoute(directionsService, directionsDisplay) {

		directionsService.route({
			origin: this.minhaLocalizacao,
			destination: this.localizacaoDestino,
			travelMode: 'WALKING'
		}, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
			} else {
				window.alert('Directions request failed due to ' + status);
			}
		});
	}
	adcicionaLocal(item: any) {


		console.log("imagem: " + item._embedded["wp:featuredmedia"][0].source_url);
		let latLng = new google.maps.LatLng(item.acf.latitude, item.acf.longitude);
		this.localizacaoDestino = latLng;
		let marker = new google.maps.Marker({
			map: this.map,
			animation: google.maps.Animation.DROP,
			position: latLng

		});
		console.log('latitude: ' + item.acf.latitude + ' longitude: ' + item.acf.longitude);

		//let content = "<h4>" + item.title.rendered+"!</h4>";
		let content = '<div>' +
			'<ion-item >' +
			'<input id="input_id" type="image" src=' + item._embedded["wp:featuredmedia"][0].source_url.replace("http://localhost", this.servidor)
			+ ' style="width:100px;"' + 'value=' + item.id + '>' +

			'<h4>' + item.title.rendered + '</h4>' +
			'</ion-item>' +
			//'<button ion-button (click)="myFunction()">Click me</button>' +
			'</div>';
		//	console.log(this.item.title.rendered);
		//	let conteudo = document.getElementById('conteudo_marca');
		//	var x = conteudo.getElementsByClassName("titulo_local");
		//	x[0].innerHTML = item.title.rendered;

		//	console.log("conteudo: " + x[0].innerHTML);






		this.addInfoWindow(marker, content);

	}
	abreDetalhe() {
		let element = window.document.getElementById('input_id');
		let id = element.getAttribute('value');
		if (this.items) {
			var result = this.items.filter(function(obj) {
				return obj.id == id;
			});
			if (result) {
				this.navCtrl.push(DetalhesLocal, {
					local: result[0]
				})
			}
		}

	}
	addInfoWindow(marker, content) {

		let infoWindow = new google.maps.InfoWindow({
			content: content
		});

		google.maps.event.addListener(marker, 'click', () => {
			infoWindow.open(this.map, marker);
		});

	}
	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		this.loader.present();
	}
	myFunction() {
		console.log('hello ionic 2');
	}

}
