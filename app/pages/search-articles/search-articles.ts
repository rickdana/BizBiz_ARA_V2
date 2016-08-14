/**
 * Created by root on 11/08/16.
 */

import {Component} from '@angular/core'
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'build/pages/search-articles/search-articles.html'
})
export class searchModalPage{

  constructor(private params: NavParams,
              private viewCtrl: ViewController){}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
