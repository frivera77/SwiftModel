import { ViewChild, Component } from '@angular/core';
import { Content, IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { TasksInboxPage} from "../tasks-inbox/tasks-inbox"
import { TasksSentPage } from '../tasks-sent/tasks-sent';
import { InfoCenterPage } from '../info-center/info-center';
import { MoreTxnsPage } from '../more-txns/more-txns';

@IonicPage()
@Component({
  selector: 'page-workspace',
  templateUrl: 'workspace.html',
})
export class WorkspacePage {
  
  tabInbox    : any= TasksInboxPage;
  tabSent     : any= TasksSentPage;
  tabInfo     : any= InfoCenterPage;
  tabOptions  : any= MoreTxnsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkspacePage');
  }

}
