import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ArticleService } from './article.service';
import { ArticlesComponent } from './articles.component';
import { DashboardComponent } from './dashboard.component';
import { ArticleDetailComponent } from './article-detail.component';

@Component({
  selector: 'my-app',
  template: `
  <h1 [routerLink]="['Dashboard']">Validate the article</h1>
  <div>
    <label>hehe</label>
    <input placeholder="select the article here"/>
    <button [routerLink]="['History']">Validate</button>
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    ArticleService
  ]
})

@RouteConfig([
  {
    path: '/history',
    name: 'History',
    component: ArticlesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:name',
    name: 'ArticleDetail',
    component: ArticleDetailComponent
  },
])

export class AppComponent {

}
