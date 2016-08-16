import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {ArticleService} from "./services/article.service";
import {GlobalsConstants} from "./constants/globals.constants";


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any,icon:any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Acceuil', component: HelloIonicPage, icon:'home'},
      { title: 'Catégories', component: ListPage , icon:'list-box'},
      { title: 'Mes Favoris', component: ListPage , icon:'heart'},
      { title: 'Invitez vos amis', component: ListPage, icon:'people' },
      { title: 'Aide', component: ListPage, icon:'help-circle' },
      { title: 'Se deconnecter', component: ListPage , icon:'log-out'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp,[ArticleService]);
