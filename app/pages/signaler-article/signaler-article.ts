/**
 * Created by root on 16/08/16.
 */

import {Component} from '@angular/core'
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'build/pages/signaler-article/signaler-article.html'
})
export class signalerModalPage{

  constructor(private params: NavParams,
              private viewCtrl: ViewController){
    console.log('Vous avez signalé un article');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
