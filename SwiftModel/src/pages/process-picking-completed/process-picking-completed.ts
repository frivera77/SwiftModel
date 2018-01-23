import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {ProcessPickingSkuPage} from '../process-picking-sku/process-picking-sku'

/**
 * Generated class for the ProcessPickingCompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-process-picking-completed',
  templateUrl: 'process-picking-completed.html',
})
export class ProcessPickingCompletedPage {
  
  filter_tasks: string = "pending";
  RefresherIcon: any;
  item : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.filter_tasks = "pending";
  }
  items: Array<
    { txttaskid   : number,
      picture     : string, 
      skuid       : string, 
      description : string,
      scanned     : number,
      requested   : number,
      color       : string,
      chip1       : string,
      chip2       : string,
      chip3       : string
    }>;
  
  //
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.pushitems()
      infiniteScroll.complete();
    }, 500);
  }
  doRefresh(refresher) {
    this.RefresherIcon = refresher;
    this.pushitems()
  }

  pushitems(){

    this.items=[];
    this.items.push({
      txttaskid : 1,
      picture : 'assets/imgs/InnerPack2.jpg',
      skuid : 'A100100',
      description : 'Jugo de Naranja 8Oz',
      scanned : 0,
      requested : 100,
      color : 'danger',
      chip1 : 'lote',
      chip2 : '',
      chip3 : ''
    });
    this.items.push({
      txttaskid : 1,
      picture : 'assets/imgs/InnerPack2.jpg',
      skuid : 'A200200',
      description : 'Jugo de Manzana 8Oz',
      scanned : 10,
      requested : 100,
      color : 'success',
      chip1 : 'serie',
      chip2 : '',
      chip3 : ''
    });
    this.items.push({
      txttaskid : 1,
      picture : 'assets/imgs/InnerPack1.jpg',
      skuid : 'A200200',
      description : 'Jugo de Manzana 8Oz',
      scanned : 50,
      requested : 100,
      color : 'success',
      chip1 : 'lote',
      chip2 : 'cuarentena',
      chip3 : ''
    });
    this.items.push({
      txttaskid : 1,
      picture : 'assets/imgs/CajaJugos.jpg',
      skuid : 'A400500',
      description : 'Caja de 6 jugos',
      scanned : 90,
      requested : 92,
      color : 'secondary',
      chip1 : 'lote',
      chip2 : '',
      chip3 : ''
    });
    this.items.push({
      txttaskid : 1,
      picture : 'assets/imgs/InnerPack1.jpg',
      skuid : 'A400500',
      description : 'Caja de jugos extra',
      scanned : 0,
      requested : 25,
      color : 'danger',
      chip1 : '',
      chip2 : '',
      chip3 : ''
    });
    this.items.push({
      txttaskid : 1,
      picture   : 'assets/imgs/InnerPack2.jpg',
      skuid     : 'A500500',
      description : 'Producto Extra',
      scanned   : 0,
      requested : 30,
      color     : 'danger',
      chip1 : 'lote',
      chip2 : '',
      chip3 : ''
    });
    this.stoprefresh()
    
  }
  PrintActions() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Print License',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Print Status',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Print Label',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
  stoprefresh(){
    this.RefresherIcon.complete();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProcessPickingCompletedPage');
    this.pushitems();
  }
  ProcessSKU(event, item){
    
    let navopts = {
      animate:true,
      duration: 2000
    }

    this.navCtrl.push(ProcessPickingSkuPage,{item: item}, navopts)
  }

}
