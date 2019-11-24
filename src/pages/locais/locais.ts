import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController, App, Searchbar, Navbar } from 'ionic-angular';
import { WpProvider } from '../../providers/wp-provider';
import { Http } from '@angular/http';
import { DetalhesLocal } from '../detalhes-local/detalhes-local';
import {Mapa} from '../mapa/mapa';

/**
 * Generated class for the LocaisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-locais',
	templateUrl: 'locais.html',
})
export class Locais {
	url: string = ':8080/bo/wp-json/wp/v2/posts?_embed&categories=';
	locais: any;
	categorias: any;
	titulo: any;
	categoriaId: Array<any>;
	locaisOriginais: any;
	grid: Array<Array<any>>;
	loading: Loading;
	radioOpen: boolean;
	checkboxOpen: boolean;
	checkboxResult;
	radioResult = 'nome';
	isSearch = false;
	servidor: any;

	@ViewChild('searchbar') searchbar: Searchbar;
	@ViewChild('navbar') navbar: Navbar;

	constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
		public wpProvider: WpProvider, private loadingCtrl: LoadingController, public alerCtrl: AlertController) {
		this.url = this.wpProvider.servidor + this.url + navParams.get("categoriaId");
		this.categoriaId = navParams.get("categoriaId");


		this.servidor = this.wpProvider.servidor;
		this.titulo = navParams.get("categoriaTitulo");
		console.log("categoria titulo: " + this.titulo);
		//console.log("url" + this.url);
		this.getLocais();
	}

	ionViewDidLoad() {


	}
	ionViewDidEnter() {
		console.log('ionViewDidLoad LocaisPage');

	}
	getLocais2() {
		this.locais = [{ "id": 29, "date": "2017-06-23T16:00:02", "date_gmt": "2017-06-23T16:00:02", "guid": { "rendered": "http:\/\/localhost:8080\/bo\/?p=29" }, "modified": "2017-07-16T10:55:05", "modified_gmt": "2017-07-16T10:55:05", "slug": "igreja-da-misericordia", "status": "publish", "type": "post", "link": "http:\/\/localhost:8080\/bo\/2017\/06\/23\/igreja-da-misericordia\/", "title": { "rendered": "Igreja da Miseric\u00f3rdia" }, "content": { "rendered": "<p><img class=\"alignnone size-full wp-image-42\" src=\"http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/Misericordia_church.jpg\" alt=\"\" width=\"220\" height=\"293\" \/><\/p>\n<p>A constru\u00e7\u00e3o da Igreja da Miseric\u00f3rdia remonta ao ano de 1611, de acordo com os testemunhos escritos e os t\u00famulos encontrados no interior do edif\u00edcio. No entanto, o seu desenho actual data do s\u00e9culo XVIII, apresentando um estilo Barroco.\u00a0 A bel\u00edssima Igreja da Miseric\u00f3rdia det\u00e9m uma forma rectangular, uma fachada ladeada por duas torres sineiras<\/p>\n<p>&nbsp;<\/p>\n<p><img class=\"alignnone size-medium wp-image-41\" src=\"http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-300x225.jpg\" alt=\"\" width=\"300\" height=\"225\" srcset=\"http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-300x225.jpg 300w, http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-768x576.jpg 768w, http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-1024x768.jpg 1024w\" sizes=\"(max-width: 300px) 100vw, 300px\" \/><\/p>\n", "protected": false }, "excerpt": { "rendered": "<p>A constru\u00e7\u00e3o da Igreja da Miseric\u00f3rdia remonta ao ano de 1611, de acordo com os testemunhos escritos e os t\u00famulos encontrados no interior do edif\u00edcio. No entanto, o seu desenho actual data do s\u00e9culo XVIII, apresentando um estilo Barroco.\u00a0 A bel\u00edssima Igreja da Miseric\u00f3rdia det\u00e9m uma forma rectangular, uma fachada ladeada por duas torres sineiras &hellip; <\/p>\n<p class=\"link-more\"><a href=\"http:\/\/localhost:8080\/bo\/2017\/06\/23\/igreja-da-misericordia\/\" class=\"more-link\">Continue reading<span class=\"screen-reader-text\"> &#8220;Igreja da Miseric\u00f3rdia&#8221;<\/span><\/a><\/p>\n", "protected": false }, "author": 1, "featured_media": 41, "comment_status": "open", "ping_status": "open", "sticky": false, "template": "", "format": "standard", "meta": [], "categories": [10, 9, 19], "tags": [], "acf": { "latitude": "40.5385862", "longitude": "-7.267441", "horario": "", "telefone": "49609869", "preco_medio": "", "pagamento": [""], "": false, "Categoria": "outros", "tipo": "" }, "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts\/29" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/types\/post" }], "author": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users\/1" }], "replies": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/comments?post=29" }], "version-history": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts\/29\/revisions" }], "wp:featuredmedia": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media\/41" }], "wp:attachment": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media?parent=29" }], "wp:term": [{ "taxonomy": "category", "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories?post=29" }, { "taxonomy": "post_tag", "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/tags?post=29" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] }, "_embedded": { "author": [{ "id": 1, "name": "root", "url": "", "description": "", "link": "http:\/\/localhost:8080\/bo\/author\/root\/", "slug": "root", "avatar_urls": { "24": "http:\/\/0.gravatar.com\/avatar\/9703209e657b637aef6ceab367f36e29?s=24&d=mm&r=g", "48": "http:\/\/0.gravatar.com\/avatar\/9703209e657b637aef6ceab367f36e29?s=48&d=mm&r=g", "96": "http:\/\/0.gravatar.com\/avatar\/9703209e657b637aef6ceab367f36e29?s=96&d=mm&r=g" }, "acf": false, "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users\/1" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users" }] } }], "wp:featuredmedia": [{ "id": 41, "date": "2017-06-23T16:58:47", "slug": "igreja_misericordia_interior", "type": "attachment", "link": "http:\/\/localhost:8080\/bo\/2017\/06\/23\/igreja-da-misericordia\/igreja_misericordia_interior\/", "title": { "rendered": "igreja_misericordia_interior" }, "author": 1, "acf": false, "caption": { "rendered": "" }, "alt_text": "", "media_type": "image", "mime_type": "image\/jpeg", "media_details": { "width": 1738, "height": 1304, "file": "2017\/06\/igreja_misericordia_interior.jpg", "sizes": { "thumbnail": { "file": "igreja_misericordia_interior-150x150.jpg", "width": 150, "height": 150, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-150x150.jpg" }, "medium": { "file": "igreja_misericordia_interior-300x225.jpg", "width": 300, "height": 225, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-300x225.jpg" }, "medium_large": { "file": "igreja_misericordia_interior-768x576.jpg", "width": 768, "height": 576, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-768x576.jpg" }, "large": { "file": "igreja_misericordia_interior-1024x768.jpg", "width": 1024, "height": 768, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-1024x768.jpg" }, "twentyseventeen-featured-image": { "file": "igreja_misericordia_interior-1738x1200.jpg", "width": 1738, "height": 1200, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-1738x1200.jpg" }, "twentyseventeen-thumbnail-avatar": { "file": "igreja_misericordia_interior-100x100.jpg", "width": 100, "height": 100, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior-100x100.jpg" }, "full": { "file": "igreja_misericordia_interior.jpg", "width": 1738, "height": 1304, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior.jpg" } }, "image_meta": { "aperture": "3.2", "credit": "", "camera": "Canon PowerShot A710 IS", "caption": "", "created_timestamp": "1272283565", "copyright": "", "focal_length": "9.954", "iso": "0", "shutter_speed": "0.125", "title": "", "orientation": "1", "keywords": [] } }, "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/06\/igreja_misericordia_interior.jpg", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media\/41" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/types\/attachment" }], "author": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users\/1" }], "replies": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/comments?post=41" }] } }], "wp:term": [[{ "id": 10, "link": "http:\/\/localhost:8080\/bo\/category\/locais\/atracoes\/", "name": "Atra\u00e7\u00f5es", "slug": "atracoes", "taxonomy": "category", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/10" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/taxonomies\/category" }], "up": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/9" }], "wp:post_type": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts?categories=10" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 9, "link": "http:\/\/localhost:8080\/bo\/category\/locais\/", "name": "Locais", "slug": "locais", "taxonomy": "category", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/9" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts?categories=9" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 19, "link": "http:\/\/localhost:8080\/bo\/category\/locais\/atracoes\/meseus_centros_tematicos\/", "name": "Museus e Centros tem\u00e1ticos", "slug": "meseus_centros_tematicos", "taxonomy": "category", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/19" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/taxonomies\/category" }], "up": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/10" }], "wp:post_type": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts?categories=19" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }], []] } }, { "id": 4, "date": "2017-05-12T21:46:25", "date_gmt": "2017-05-12T21:46:25", "guid": { "rendered": "http:\/\/localhost:8080\/bo\/?p=4" }, "modified": "2017-06-21T18:25:12", "modified_gmt": "2017-06-21T18:25:12", "slug": "se-da-guarda", "status": "publish", "type": "post", "link": "http:\/\/localhost:8080\/bo\/2017\/05\/12\/se-da-guarda\/", "title": { "rendered": "se da guarda" }, "content": { "rendered": "<p><b>S\u00e9-Catedral da Guarda<\/b> (<a title=\"Guarda\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Guarda\">Guarda<\/a>, <a title=\"Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Portugal\">Portugal<\/a>) foi erguida no seguimento do pedido de <a title=\"Sancho I de Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Sancho_I_de_Portugal\">D. Sancho I<\/a> ao <a title=\"Papa Inoc\u00eancio III\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Papa_Inoc%C3%AAncio_III\">Papa Inoc\u00eancio III<\/a> para transferir a diocese de <a title=\"Egit\u00e2nia\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Egit%C3%A2nia\">Egit\u00e2nia<\/a> para a nova cidade da Guarda. Da original constru\u00e7\u00e3o, de <a class=\"mw-redirect\" title=\"Arquitectura rom\u00e2nica em Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Arquitectura_rom%C3%A2nica_em_Portugal\">estilo rom\u00e2nico<\/a>, nada resta. Foram, no entanto, encontrados alguns vest\u00edgios que apontam para um edif\u00edcio simples.<\/p>\n<p>Seria mandada construir por <a title=\"Sancho II de Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Sancho_II_de_Portugal\">D. Sancho II<\/a> uma segunda catedral, no local onde se situa a actual <a class=\"mw-disambig\" title=\"Igreja da Miseric\u00f3rdia\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Igreja_da_Miseric%C3%B3rdia\">Igreja da Miseric\u00f3rdia<\/a>, conclu\u00edda no <a title=\"S\u00e9culo XIV\" href=\"https:\/\/pt.wikipedia.org\/wiki\/S%C3%A9culo_XIV\">s\u00e9culo XIV<\/a>, mas mais tarde destru\u00edda aquando da reforma <a title=\"Fernando I de Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Fernando_I_de_Portugal\">fernandina<\/a> das muralhas, por se situar fora delas, por temer a conquista da cidade por Castela, pois podia ser usada para subir \u00e0 muralha.<\/p>\n<p>A constru\u00e7\u00e3o da actual S\u00e9 da Guarda remonta aos finais do s\u00e9culo XIV, j\u00e1 no reinado de <a title=\"Jo\u00e3o I de Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Jo%C3%A3o_I_de_Portugal\">D. Jo\u00e3o I<\/a> \u2014 D. Fernando teria falhado na promessa de erguer novo templo \u2014, por iniciativa do bispo <a class=\"new\" title=\"Vasco de Lamego (p\u00e1gina n\u00e3o existe)\" href=\"https:\/\/pt.wikipedia.org\/w\/index.php?title=Vasco_de_Lamego&amp;action=edit&amp;redlink=1\">Vasco de Lamego<\/a>, partid\u00e1rio da <a title=\"Dinastia de Avis\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Dinastia_de_Avis\">casa de Avis<\/a> durante a <a class=\"mw-redirect\" title=\"Crise de 1383-1385\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Crise_de_1383-1385\">crise din\u00e1stica<\/a>. As obras arrastaram-se lentamente e s\u00f3 no reinado de <a title=\"Jo\u00e3o III de Portugal\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Jo%C3%A3o_III_de_Portugal\">D. Jo\u00e3o III<\/a> seriam conclu\u00eddas, j\u00e1 em pleno <a title=\"S\u00e9culo XVI\" href=\"https:\/\/pt.wikipedia.org\/wiki\/S%C3%A9culo_XVI\">s\u00e9culo XVI<\/a>, sendo por isso um dos monumentos portugueses dos \u00faltimos tempos do <a class=\"mw-redirect\" title=\"Estilo g\u00f3tico\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Estilo_g%C3%B3tico\">g\u00f3tico<\/a>, com evid\u00eancias claras da influ\u00eancia <a title=\"Estilo manuelino\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Estilo_manuelino\">manuelina<\/a>.<\/p>\n<p>A hist\u00f3ria da catedral teve um per\u00edodo importante na sua conserva\u00e7\u00e3o, na viragem para o <a title=\"S\u00e9culo XIX\" href=\"https:\/\/pt.wikipedia.org\/wiki\/S%C3%A9culo_XIX\">s\u00e9culo XIX<\/a>: em <a title=\"1898\" href=\"https:\/\/pt.wikipedia.org\/wiki\/1898\">1898<\/a> coube ao arquitecto Rosendo Carvalheira o restauro do edif\u00edcio, executando aqui um dos mais importantes projectos de restauro revivalista, pelo que \u00e9 not\u00e1vel o estado de conserva\u00e7\u00e3o da catedral.<\/p>\n<p>Encerrada ao culto durante a Instaura\u00e7\u00e3o da R\u00e9publica, com a desculpa de garantir a sua restaura\u00e7\u00e3o nunca realizada, reabriu de novo em 21 de Junho de 1921 para a sagra\u00e7\u00e3o episcopal de D. <a title=\"Jos\u00e9 do Patroc\u00ednio Dias\" href=\"https:\/\/pt.wikipedia.org\/wiki\/Jos%C3%A9_do_Patroc%C3%ADnio_Dias\">Jos\u00e9 do Patroc\u00ednio Dias<\/a>, bispo de Beja e natural da Covilh\u00e3, Diocese da Guarda.<\/p>\n", "protected": false }, "excerpt": { "rendered": "<p>S\u00e9-Catedral da Guarda (Guarda, Portugal) foi erguida no seguimento do pedido de D. Sancho I ao Papa Inoc\u00eancio III para transferir a diocese de Egit\u00e2nia para a nova cidade da Guarda. Da original constru\u00e7\u00e3o, de estilo rom\u00e2nico, nada resta. Foram, no entanto, encontrados alguns vest\u00edgios que apontam para um edif\u00edcio simples. Seria mandada construir por &hellip; <\/p>\n<p class=\"link-more\"><a href=\"http:\/\/localhost:8080\/bo\/2017\/05\/12\/se-da-guarda\/\" class=\"more-link\">Continue reading<span class=\"screen-reader-text\"> &#8220;S\u00e9 da Guarda&#8221;<\/span><\/a><\/p>\n", "protected": false }, "author": 1, "featured_media": 5, "comment_status": "open", "ping_status": "open", "sticky": false, "template": "", "format": "standard", "meta": [], "categories": [10, 3, 9], "tags": [], "acf": { "latitude": "40.538337", "longitude": "-7.269513", "horario": "", "telefone": "", "preco_medio": "", "pagamento": [""], "": false, "tipo_restaurante": false }, "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts\/4" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/types\/post" }], "author": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users\/1" }], "replies": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/comments?post=4" }], "version-history": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts\/4\/revisions" }], "wp:featuredmedia": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media\/5" }], "wp:attachment": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media?parent=4" }], "wp:term": [{ "taxonomy": "category", "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories?post=4" }, { "taxonomy": "post_tag", "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/tags?post=4" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] }, "_embedded": { "author": [{ "id": 1, "name": "root", "url": "", "description": "", "link": "http:\/\/localhost:8080\/bo\/author\/root\/", "slug": "root", "avatar_urls": { "24": "http:\/\/0.gravatar.com\/avatar\/9703209e657b637aef6ceab367f36e29?s=24&d=mm&r=g", "48": "http:\/\/0.gravatar.com\/avatar\/9703209e657b637aef6ceab367f36e29?s=48&d=mm&r=g", "96": "http:\/\/0.gravatar.com\/avatar\/9703209e657b637aef6ceab367f36e29?s=96&d=mm&r=g" }, "acf": false, "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users\/1" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users" }] } }], "wp:featuredmedia": [{ "id": 5, "date": "2017-05-12T21:45:11", "slug": "guardacathedral2", "type": "attachment", "link": "http:\/\/localhost:8080\/bo\/2017\/05\/12\/se-da-guarda\/guardacathedral2\/", "title": { "rendered": "GuardaCathedral2" }, "author": 1, "acf": false, "caption": { "rendered": "" }, "alt_text": "", "media_type": "image", "mime_type": "image\/jpeg", "media_details": { "width": 2048, "height": 1536, "file": "2017\/05\/GuardaCathedral2.jpg", "sizes": { "thumbnail": { "file": "GuardaCathedral2-150x150.jpg", "width": 150, "height": 150, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2-150x150.jpg" }, "medium": { "file": "GuardaCathedral2-300x225.jpg", "width": 300, "height": 225, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2-300x225.jpg" }, "medium_large": { "file": "GuardaCathedral2-768x576.jpg", "width": 768, "height": 576, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2-768x576.jpg" }, "large": { "file": "GuardaCathedral2-1024x768.jpg", "width": 1024, "height": 768, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2-1024x768.jpg" }, "twentyseventeen-featured-image": { "file": "GuardaCathedral2-2000x1200.jpg", "width": 2000, "height": 1200, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2-2000x1200.jpg" }, "twentyseventeen-thumbnail-avatar": { "file": "GuardaCathedral2-100x100.jpg", "width": 100, "height": 100, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2-100x100.jpg" }, "full": { "file": "GuardaCathedral2.jpg", "width": 2048, "height": 1536, "mime_type": "image\/jpeg", "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2.jpg" } }, "image_meta": { "aperture": "5.6", "credit": "", "camera": "DSC-P200", "caption": "", "created_timestamp": "1209637083", "copyright": "", "focal_length": "7.9", "iso": "100", "shutter_speed": "0.004", "title": "", "orientation": "1", "keywords": [] } }, "source_url": "http:\/\/localhost:8080\/bo\/wp-content\/uploads\/2017\/05\/GuardaCathedral2.jpg", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media\/5" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/media" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/types\/attachment" }], "author": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/users\/1" }], "replies": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/comments?post=5" }] } }], "wp:term": [[{ "id": 10, "link": "http:\/\/localhost:8080\/bo\/category\/locais\/atracoes\/", "name": "Atra\u00e7\u00f5es", "slug": "atracoes", "taxonomy": "category", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/10" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/taxonomies\/category" }], "up": [{ "embeddable": true, "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/9" }], "wp:post_type": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts?categories=10" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 3, "link": "http:\/\/localhost:8080\/bo\/category\/cultura\/", "name": "Cultura", "slug": "cultura", "taxonomy": "category", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/3" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts?categories=3" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 9, "link": "http:\/\/localhost:8080\/bo\/category\/locais\/", "name": "Locais", "slug": "locais", "taxonomy": "category", "_links": { "self": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories\/9" }], "collection": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/localhost:8080\/bo\/wp-json\/wp\/v2\/posts?categories=9" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }], []] } }];
		this.locaisOriginais = this.locais;
	}

	getLocais() {
		console.log('get locais');
		this.createLoader();
		this.loading.present().then(() => {
			this.http.get(this.url)
				.map(res => res.json())
				.subscribe(data => {
					console.log('primeiro');
					this.locais = data;
					console.log()
					this.locaisOriginais = this.locais;
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
	setCategoria() {

		for (var local of this.locais) {
			for (var categoria of this.categorias) {
				if (local.categories.includes(categoria.id)) {
					local.categoria = categoria;
					console.log("categoria: " +local.categoria.slug )
					break;
				}
			}
		}


	}

	getCategorias() {
		let url: string = ':8080/bo/wp-json/wp/v2/categories?parent=';
		url = this.wpProvider.servidor + url + this.categoriaId;

		this.http.get(url)
			.map(res => res.json())
			.subscribe(data => {
				this.categorias = data;
				this.setCategoria();
				this.loading.dismiss();
			}, error => {
				this.loading.dismiss();
				//	this.errorMessage = <any>error
				console.log(<any>error);

			});

	}


	setGrid() {

		console.log("local " + this.locais[0].id + ' ' + this.locais.length);
		this.grid = Array(Math.ceil(this.locais.length / 2));
		let rowNum = 0;
		for (let i = 0; i < this.locais.length; i += 2) {

			this.grid[rowNum] = Array(2);

			if (this.locais[i]) {
				this.grid[rowNum][0] = this.locais[i]
			}
			if (this.locais[i + 1]) {
				this.grid[rowNum][1] = this.locais[i + 1]
			}

			rowNum++;
		}
	}
	createLoader(message: string = "Por favor aguarde...") { // Optional Parameter
		this.loading = this.loadingCtrl.create({
			content: message
		});
	}
	getItems(ev) {
		// Reset items back to all of the items
		//this.initializeItems();
		this.locais = this.locaisOriginais;
		//	this.getLocais2();
		console.log(this.locais[0].title.rendered + this.locais.length);

		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			console.log('val:' + val)
			this.locais = this.locais.filter((local) => {
				return (local.title.rendered.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
					this.locais.sort(this.ordenarPorNome);
				}
				else if (data == 'categoria') {
					//propriedade = 'acf.tipo';
					this.locais.sort(this.ordenarPorTipo);
				}
				//this.locais.sort(this.ordenar(propriedade));
			}
		});

		alert.present().then(() => {
			this.radioOpen = true;
		});
	}
	ordenar(propriedade) {
		var sortOrder = 1;

		// if (propriedade[0] === "-") {
		// 	sortOrder = -1;
		// 	propriedade = propriedade.substr(1);
		// }
		return function(a, b) {
			//console.log(a.);
			var result = (a.propriedade < b.propriedade) ? -1 : (a.propriedade > b.propriedade) ? 1 : 0;
			return result * sortOrder;
		}
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
	tipoAtracoes = ['Outros', 'Igrejas', 'Os Mais Visitados', 'Ruas e praças', 'Museus', 'Parques'];
	//	tiposFiltrados = [''];
	tiposFiltrados: Array<any>=[];

	selecionaFiltro() {
		let alert = this.alerCtrl.create();
		alert.setTitle('Filtrar por tipo');

		for (var categoria of this.categorias) {
			console.log("categoria " + categoria.id + " " + categoria.name)
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
	abreMapa(): void {
		this.navCtrl.push(Mapa, {
			locais: this.locais
		})

	}


	mostraSearchBar() {

		this.isSearch = !this.isSearch;
		if (this.isSearch) {
			setTimeout(() => {
				this.searchbar.setFocus();
				this.navbar.hideBackButton = true;
			});
		}else{
			this.navbar.hideBackButton = false;
		}
	}

	filtraPorTipo() {
		this.locais = this.locaisOriginais;
		if (this.tiposFiltrados.length > 0/* && this.tiposFiltrados[0].length > 0*/) {
			console.log(this.tiposFiltrados);
		//	this.locais = this.tiposFiltrados;
			this.locais = this.locais.filter((local) => {
				//return (local.acf.tipo.indexOf(val.toLowerCase()) > -1);
				//return (this.tiposFiltrados.indexOf(local.acf.tipo) > -1);
				return (this.tiposFiltrados.indexOf(local.categoria) > -1);
			})

		}

	}
	abreDetalhes(item): void {
		this.navCtrl.push(DetalhesLocal, {
			local: item
		})

	}

}

