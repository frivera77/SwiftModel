import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Broadcaster } from '@ionic-native/broadcaster';

/**
 * Generated class for the TaskPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-popover',
  templateUrl: 'task-popover.html',
})
export class TaskPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private broadcaster: Broadcaster) {
  }

  quitapp(){

  }
  testevent(){
    //alert('aqui');
    this.broadcaster.fireNativeEvent("test.event",{}).then((xvalue:any)=>{
      //alert('come back value:'+xvalue);
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPopoverPage');
  }

}
