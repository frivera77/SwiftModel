import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
/**
 * Generated class for the ProcessPickingSkuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-process-picking-sku',
  templateUrl: 'process-picking-sku.html',
})
export class ProcessPickingSkuPage {
  ApplyBatch: boolean = false;
  ApplySeries: boolean = false;
  @ViewChild('location') myInput ;

  constructor(public navCtrl: NavController, private keyboard: Keyboard, public navParams: NavParams) {
  }

  fieldfocus(field){
    switch(field){
      case 'location':
        setTimeout(() => {
          this.keyboard.close();  
        },250);
      break;
    }
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessPickingSkuPage');
    setTimeout(() => {
      this.myInput.setFocus();
    },150);

  }

}
