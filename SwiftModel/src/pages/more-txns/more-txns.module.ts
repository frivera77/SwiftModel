import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreTxnsPage } from './more-txns';

@NgModule({
  declarations: [
    MoreTxnsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreTxnsPage),
  ],
})
export class MoreTxnsPageModule {}
