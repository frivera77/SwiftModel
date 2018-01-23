import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { BatteryStatus,BatteryStatusResponse } from '@ionic-native/battery-status';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { StartSessionPage } from '../start-session/start-session';

@IonicPage()
@Component({
  selector: 'page-verify-environment',
  templateUrl: 'verify-environment.html',
})
export class VerifyEnvironmentPage {
  BtStatus : boolean = false;
  WfStatus : boolean = false;

  BTIcon      : string = "close-circle";
  BTIconColor : string = "danger";

  BTWirelessIcon      : string = "close-circle";
  BTWirelessIconColor : string = "danger";
  BTWirelessName      : string = "";
  BTWirelessIP        : string = "0.0.0.0";

  BatteryLevel      : number = 0;

  LastLoggedUser    : string = "";

  constructor(
    public navCtrl: NavController, 
    private diagnostic: Diagnostic,
    private batteryStatus: BatteryStatus,
    private networkInterface: NetworkInterface,
    private hotspot: Hotspot,
    private platform: Platform,
    public navParams: NavParams) {
  }

  checkBattery(){
    // watch change in battery status
    
    let subscription = this.batteryStatus.onChange().subscribe(
      (status: BatteryStatusResponse) => {
        this.BatteryLevel = status.level
      }
    );
    
  }
  ExitApp(){
    this.platform.exitApp();
  }
  ShowStartSession(){
    this.navCtrl.setRoot(StartSessionPage)
  }
  checkWireless(){
    this.diagnostic.isWifiAvailable().then((xvalue: any)=>{
      this.WfStatus = true;
      this.BTWirelessIcon = "checkmark-circle";    
      this.BTWirelessIconColor = "secondary";

      this.networkInterface.getWiFiIPAddress().then((xvalue:string)=>{
          this.BTWirelessIP = xvalue;
      });

      this.hotspot.getConnectionInfo().then((xvalue:any)=>{
        console.log(xvalue);
        this.BTWirelessName = xvalue.SSID;
      });

    }).catch((xreason:any)=>{
      this.BtStatus = false; 
      this.BTWirelessIcon = "close-circle";
      this.BTWirelessIconColor = "danger";
    })
  }

  checkBT(){
    
    this.diagnostic.getBluetoothState()
    .then((state) => {
      if (state == this.diagnostic.bluetoothState.POWERED_ON){
        this.BtStatus = true;
        this.BTIcon = "checkmark-circle";    
        this.BTIconColor = "secondary";

      } else {
        this.BtStatus = false; 
        this.BTIcon = "close-circle";
        this.BTIconColor = "danger";    
      }
    }).catch(e => {
       
      this.BtStatus = false; 
      this.BTIcon = "close-circle";
      this.BTIconColor = "danger";
        
    });

  }
  ionViewDidLoad() {
    this.checkBT();
    this.checkWireless();
    this.checkBattery();
  }

}
