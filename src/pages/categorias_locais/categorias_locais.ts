import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController} from 'ionic-angular';
import { Restaurantes } from '../restaurantes/restaurantes';
import { WpProvider } from '../../providers/wp-provider';
import { Http } from '@angular/http';
import { Locais } from '../locais/locais';

/**
 * Generated class for the Locais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-categorias_locais',
  templateUrl: 'categorias_locais.html',
})
export class CategoriasLocais {
  url: string = ':8080/bo/wp-json/wp/v2/categories?parent=9';
  icons: string[];
  loading: Loading;

  //categorias: Categoria[];


  categorias: Array<{ nome: string, id: number, slug: string, icon: string, descricao: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
    public wpProvider: WpProvider, private loadingCtrl: LoadingController) {

    this.icons = ['beer', 'home', 'assets/icon/monument', 'wine', 'appstore'];
    this.url = wpProvider.servidor + this.url;
    this.getCategorias();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Locais');






  }
  itemSelected(): void {
    alert("hello world");
  }

  getCategorias() {
    this.createLoader();
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        //    this.items = [];
        data.sort(function(a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        data.sort();

        //  console.log("id:" + data[0].id + 'data lenght: ' + data.lenght);
        this.categorias = [];
        for (let i = 0; i < data.length; i++) {

          this.categorias.push({
            nome: data[i].name,
            id: data[i].id,
            slug: data[i].slug,
            icon: this.getIcon(data[i]),
            descricao: data[i].description



          });

        }
        this.loading.dismiss();
      }, error => {
        this.loading.dismiss();
        //  this.errorMessage = <any>error
        console.log(<any>error);
      });





  }
  getIcon(categoria) {
    //this.icons = ['beer', 'home', 'assets/icon/monument', 'wine', 'appstore'];
    //   console.log("categoria: " + categoria)
    if (categoria.slug == 'alojamento')
      return 'home';
    else if (categoria.slug == 'atracoes')
      return 'eye';
    else if (categoria.slug == 'comidas_bebidas')
      return 'pizza';
    else if (categoria.slug == 'noite')
      return 'wine';
    else if (categoria.slug == 'shopping')
      return 'appstore';
    else
      return '';


  }

  abreRestaurantes() {
    // alert("hello world");
    this.navCtrl.push(Restaurantes);

  }
  categoriaSelecionada(event, categoria) {
    // That's right, we're pushing to ourselves!
    /*this.navCtrl.push(ListPage, {
      item: item
    });*/
    /*if (categoria.slug == 'comidas_bebidas') {
      console.log(' categoria id : ' + categoria.id);
      this.navCtrl.push(Restaurantes, {

        categoriaId: categoria.id,
      });
    } 
    else {*/
      this.navCtrl.push(Locais, {
        categoriaId: categoria.id,
        categoriaTitulo: categoria.nome

      });

  //  }

  }
  createLoader(message: string = "Por favor aguarde...") { // Optional Parameter
    this.loading = this.loadingCtrl.create({
      content: message
    });
  }

}
