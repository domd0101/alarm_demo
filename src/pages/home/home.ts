import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SetAlarmPage } from '../set-alarm/set-alarm'
import { bake_cookie, read_cookie } from 'sfcookies'
import moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alarms = []
  count = 0
  alarmObj: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public toastController: ToastController) {
  }

  goToSet($event, alarm){
    console.log("this is the homeObj",alarm);
    
    this.navCtrl.push(SetAlarmPage, alarm)
  }

  addAlarm(){
    this.count++
    this.alarms.push(
      {
      id: this.count,
      time: '01:00 pm',
      label: 'Untitled'
    })
    console.log(this.alarms)
  }

  deleteAlarm(index){
    this.alarms.splice(this.alarms.findIndex(x => x===index),1)
  }

  readAlarms() {
    for(var i=1; i<this.alarms.length+1; i++){
      this.alarms[i-1] = read_cookie(`AlarmObj${i}`)
    }
  }

  readAlarms1() {
    for(var i=1; i<10; i++){
      if (read_cookie(`AlarmObj${i}`).id) {
        this.alarms.push(read_cookie(`AlarmObj${i}`))
        this.count++ 
      } else { console.log('not a thing');
      }
    }
  }

  alarmToggle($event) {
    console.log('clicked');
    if ($event.value){
      var msg = 'Alarm is On!'
    } else { 
      var msg = 'Alarm is Off...'
    }

    let toast = this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'bottom'
              })
              toast.present()
  }

  ionViewWillEnter() {
    this.readAlarms() 
  }

  ionViewDidLoad() {
    console.log('working');
    
    this.readAlarms1()
  }

}
