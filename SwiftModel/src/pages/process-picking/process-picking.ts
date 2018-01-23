import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ProcessPickingCompletedPage} from '../process-picking-completed/process-picking-completed'
/**
 * Generated class for the ProcessPickingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-process-picking',
  templateUrl: 'process-picking.html',
})
export class ProcessPickingPage {
  EndCustomer: string = ""
  item : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  
  CreateLicense(){
    
    let navopts = {
      animate:true,
      duration: 2000
    }

    this.navCtrl.push(ProcessPickingCompletedPage,{item: this.item}, navopts)
  }
  ionViewDidLoad() {
    //let xdata = [];
    this.item = this.navParams.get('item');
    console.log(this.item);
    this.EndCustomer = this.item.txendcust;
  }

}
