import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VerifyEnvironmentPage } from '../pages/verify-environment/verify-environment';
import { StartSessionPage } from '../pages/start-session/start-session';
import { WorkspacePage } from '../pages/workspace/workspace';
import { TasksInboxPage } from '../pages/tasks-inbox/tasks-inbox';
import { ProcessPickingPage } from '../pages/process-picking/process-picking';
import { ProcessPickingCompletedPage} from '../pages/process-picking-completed/process-picking-completed'
import {ProcessPickingSkuPage} from '../pages/process-picking-sku/process-picking-sku'
import { TaskPopoverPage} from '../pages/task-popover/task-popover'
import { TasksSentPage } from '../pages/tasks-sent/tasks-sent';
import { InfoCenterPage } from '../pages/info-center/info-center';
import { MoreTxnsPage } from '../pages/more-txns/more-txns';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { BatteryStatus } from '@ionic-native/battery-status';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { PinCheck } from '@ionic-native/pin-check';
import { PinDialog } from '@ionic-native/pin-dialog';
import { Dialogs } from '@ionic-native/dialogs';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Broadcaster } from '@ionic-native/broadcaster';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VerifyEnvironmentPage,
    StartSessionPage,
    WorkspacePage,
    TasksInboxPage,
    ProcessPickingPage,
    ProcessPickingCompletedPage,
    ProcessPickingSkuPage,
    TaskPopoverPage,
    TasksSentPage,
    InfoCenterPage,
    MoreTxnsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VerifyEnvironmentPage,
    StartSessionPage,
    WorkspacePage,
    TasksInboxPage,
    ProcessPickingPage,
    ProcessPickingCompletedPage,
    ProcessPickingSkuPage,
    TaskPopoverPage,
    TasksSentPage,
    InfoCenterPage,
    MoreTxnsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Diagnostic,
    BatteryStatus,
    NetworkInterface,
    PinCheck,
    Hotspot,
    PinDialog,
    AndroidFullScreen,
    Dialogs,    
    Keyboard,
    Broadcaster,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
