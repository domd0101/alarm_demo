import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { bake_cookie, read_cookie } from 'sfcookies'
import moment from 'moment'


import { HomePage } from '../home/home'


@IonicPage()
@Component({
  selector: 'page-set-alarm',
  templateUrl: 'set-alarm.html',
})
export class SetAlarmPage {
  alarmObj: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alarmObj = this.navParams.data 
  }

  saveAlarm(time,label,sound,$event){

    this.alarmObj = {
      id: this.alarmObj.id,
      time: moment(time, 'HH:mm').format('hh:mm a'),
      label: label,
      sound: sound
    }

    console.log(this.alarmObj);
    

    bake_cookie(`AlarmObj${this.alarmObj.id}`,this.alarmObj)

    this.navCtrl.pop();
    return
  }


   readAlarm() {
     if(this.alarmObj.sound){
       console.log("test failed");
      this.alarmObj = read_cookie(`AlarmObj${this.alarmObj.id}`)
      this.alarmObj.time = moment(this.alarmObj.time, 'hh:mm a').format('HH:mm')
     } else {
       this.alarmObj.time = '13:00'
      }    
    return this.alarmObj
    }

  ionViewWillEnter() {
    console.log("this is the id on the set-alarm",this.alarmObj.id)
    this.readAlarm()
  }

}
