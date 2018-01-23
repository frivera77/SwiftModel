import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoreTxnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-txns',
  templateUrl: 'more-txns.html',
})
export class MoreTxnsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected() {
    alert('item selected')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreTxnsPage');
  }

}
