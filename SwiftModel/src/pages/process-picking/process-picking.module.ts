import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcessPickingPage } from './process-picking';

@NgModule({
  declarations: [
    ProcessPickingPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcessPickingPage),
  ],
})
export class ProcessPickingPageModule {}
