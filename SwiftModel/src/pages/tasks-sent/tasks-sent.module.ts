import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksSentPage } from './tasks-sent';

@NgModule({
  declarations: [
    TasksSentPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksSentPage),
  ],
})
export class TasksSentPageModule {}
