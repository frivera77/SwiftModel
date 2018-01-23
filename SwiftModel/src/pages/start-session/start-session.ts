import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PinCheck } from '@ionic-native/pin-check';
import { PinDialog } from '@ionic-native/pin-dialog';
import { WorkspacePage} from '../workspace/workspace'

/**
 * Generated class for the StartSessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-session',
  templateUrl: 'start-session.html',
})
export class StartSessionPage {

  LastUserLogged : string = "FRIVERA"

  constructor(private pinDialog: PinDialog,
    public navCtrl: NavController, 
    public platform: Platform,
    public navParams: NavParams) {
  }

  ExitApp(){
    this.platform.exitApp();
  }
  ionViewDidLoad() {
    
  }

  checkPIN(){
    try{
      this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
      .then(
        (result: any) => {
          if (result.buttonIndex == 1){
            //WorkspacePage
            this.navCtrl.setRoot(WorkspacePage)
          } 
          else if(result.buttonIndex == 2) console.log('User cancelled');
        }
      );
    }catch(e){
      alert(e.message);
    }
  }
}
