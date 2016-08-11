import {Component} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../components/article.component";
import {GlobalsConstants} from "../../constants/globals.constants";
import {NavController, NavParams, ModalController} from "ionic-angular";
import {ArticleDetails} from "../articles-details/article-details";
import {searchModalPage} from "../search-articles/search-articles";


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

  private title = GlobalsConstants.APPNAME;
  private skip = 0;
  private limit = GlobalsConstants.PAGE;

  private articles1:Array<Article> = [];
  private articles2:Array<Article> = [];

  constructor(private articleService:ArticleService,
              private navCtrl: NavController,
              private navParams: NavParams,
              private modalController : ModalController) {

    this.getArticlesByLimit(this.skip,this.limit);
  }

  loadAll(){
    this.articleService.getAllArticles().subscribe(res => {
      let articles = res;

      console.log("Article =>",articles)
    })


  }

  getArticlesByLimit(skip:number,limit:number){

      this.articleService.getArticlesByLimit(skip,limit).subscribe(res => {
        let articles = res;
        let tab1, tab2;

        tab1 = articles.splice(0,(articles.length/2));
        tab2 = articles;
        tab1.forEach(x => {
          this.articles1.push(x);
        });
        tab2.forEach(x => {
          this.articles2.push(x);
        });

      });
  }

  articleDetails(event,item:Article){
    this.navCtrl.push(ArticleDetails, {
      article: item
    });
  }


  searchArticle() {
    console.log("open modal")

    let modal = this.modalController.create(searchModalPage);
    modal.present();
  }

  doRefresh(refresher) {
    this.articles1 = [];
    this.articles2 = [];
    this.getArticlesByLimit(0,6);
    refresher.complete();

  }

  doInfinite(infiniteScroll){
    this.skip = this.limit;
    this.limit +=6;
    this.getArticlesByLimit(this.skip,this.limit);
    infiniteScroll.complete();
  }
}
