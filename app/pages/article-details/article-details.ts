import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Article} from "../../components/article.component";
import {GoogleMap, GoogleMapsEvent} from "ionic-native";


@Component({
  templateUrl: 'build/pages/article-details/article-details.html'
})
export class ArticleDetails {
  private article: Article;
  private map;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.article = navParams.get('article');
    this.map = GoogleMap('article-details-map',{

    });
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log('Map is ready!'));
    console.log(this.article)

  }
}
