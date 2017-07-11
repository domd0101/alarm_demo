import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetAlarmPage } from './set-alarm';

@NgModule({
  declarations: [
    SetAlarmPage,
  ],
  imports: [
    IonicPageModule.forChild(SetAlarmPage),
  ],
  exports: [
    SetAlarmPage
  ]
})
export class SetAlarmPageModule {}
