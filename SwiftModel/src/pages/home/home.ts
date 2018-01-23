import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerifyEnvironmentPage } from '../verify-environment/verify-environment';
import { WorkspacePage } from '../workspace/workspace';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private androidFullScreen: AndroidFullScreen) {
    this.androidFullScreen.isImmersiveModeSupported()
  .then(() => {this.androidFullScreen.immersiveMode(); navCtrl.setRoot(WorkspacePage)})
  .catch((error: any) => console.log(error));
    
  }

}
