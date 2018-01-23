import { ViewChild, Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { ProcessPickingPage } from '../process-picking/process-picking';
import { TaskPopoverPage } from '../task-popover/task-popover';
import { Broadcaster } from '@ionic-native/broadcaster';

/**
 * Generated class for the TasksInboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks-inbox',
  templateUrl: 'tasks-inbox.html',
})

export class TasksInboxPage {

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  
  items: Array<
    { txttaskid : number,
      txtitle   : string, 
      txcust    : string, 
      txendcust : string,
      txposted  : string,
      txprior   : string,   //low, medium, high
      txpriorcolor: string, //green, yellow, red
      txstatus  : string,   //assigned, onprocess, done
      txcomments: string,
      txgate    : string,
    }>;
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs, private broadcaster: Broadcaster) {
  }

  presentPopover(ev) {

    try{
      let popover = this.popoverCtrl.create(TaskPopoverPage);

      popover.present({
        ev: ev
      });
  
    }catch(e){
      console.clear();
      console.log(e);
    }
  }

  pushitems(){
    this.items=[];
    this.items.push(
      {
        txttaskid : 1,
        txtitle   : 'Picking', 
        txcust    : 'Ferco', 
        txendcust : 'Proyecto Edificio Solares',
        txposted  : '10.10am',
        txprior   : 'high',   //low, medium, high
        txpriorcolor: 'danger', //green, yellow, red
        txstatus  : 'assigned',   //assigned, onprocess, done
        txcomments: 'Favor validar la limpieza de la entrega',
        txgate    : 'Puerta #4'
      }
    );
    this.items.push(
      {
        txttaskid : 5,
        txtitle   : 'Recepcion', 
        txcust    : 'Ferco', 
        txendcust : 'Proveedor Internacional de Pisos',
        txposted  : '1.45pm',
        txprior   : 'high',   //low, medium, high
        txpriorcolor: 'danger', //green, yellow, red
        txstatus  : 'assigned',   //assigned, onprocess, done
        txcomments: 'Favor pedir la papeleria original',
        txgate    : 'Puerta #1'
      }
    );
    this.items.push(
      {
        txttaskid : 2,
        txtitle   : 'Picking', 
        txcust    : 'Ferco', 
        txendcust : 'Proyecto Crece Torre III',
        txposted  : '10.40am',
        txprior   : 'medium',   //low, medium, high
        txpriorcolor: 'success', //green, yellow, red
        txstatus  : 'assigned',   //assigned, onprocess, done
        txcomments: 'El cliente requiere etiquetacion',
        txgate    : 'Puerta #3'
      }
    );
    this.items.push(
      {
        txttaskid : 4,
        txtitle   : 'Reubicacion', 
        txcust    : 'Ferco', 
        txendcust : '',
        txposted  : '11.45am',
        txprior   : 'medium',   //low, medium, high
        txpriorcolor: 'success', //green, yellow, red
        txstatus  : 'assigned',   //assigned, onprocess, done
        txcomments: 'Reubicar la mercaderia en control de calidad',
        txgate    : 'Destino en tarea'
      }
    );
    this.items.push(
      {
        txttaskid : 3,
        txtitle   : 'Conteo', 
        txcust    : 'Ferco', 
        txendcust : '',
        txposted  : '11.20am',
        txprior   : 'low',   //low, medium, high
        txpriorcolor: 'secondary', //green, yellow, red
        txstatus  : 'assigned',   //assigned, onprocess, done
        txcomments: 'Conteo por ubicacion, Pasillo #4',
        txgate    : ''
      }
    );
  }
  ionViewDidLoad() {
    this.pushitems();
    //alert("about to listener");
    this.broadcaster.addEventListener("test.event").subscribe((event) => {
      //console.log(event)
      alert('evento disparado');
    });
  }
  itemTapped(event, item) {
    let navopts = {
      animate:true,
      duration: 2000
    }
    console.clear();
    console.log(item);
    this.navCtrl.push(ProcessPickingPage, {item:item}, navopts);
    
    /*
    this.dialogs.alert(item.txttaskid + " " + item.txendcust + " "+ item.txcomments,"Swift 3PL","Aceptar")
    .then(() => {})
    .catch(e => {});
    */
  }

}
