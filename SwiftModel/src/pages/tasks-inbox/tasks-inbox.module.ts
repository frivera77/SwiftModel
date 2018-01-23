import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksInboxPage } from './tasks-inbox';

@NgModule({
  declarations: [
    TasksInboxPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksInboxPage),
  ],
})
export class TasksInboxPageModule {}
