import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';


import { Article } from './article';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleService } from './article.service';



@Component({
    selector: 'my-articles',
    template:`
      <h1>History</h1>
      <ul class="heroes">
        <li *ngFor="let article of history"
          [class.selected]="article === selectedArticle"
          (click)="onSelect(article)">
          {{article.name}}
        </li>
      </ul>
      <div *ngIf="selectedArticle">
        <h2>
          {{selectedArticle.name | uppercase}} is my article
        </h2>
        <button (click)="gotoDetail(selectedArticle)">View Details</button>
      </div>
      `
})



export class ArticlesComponent implements OnInit {
  selectedArticle: Article;
  history: Article[];

  constructor(
    private router: Router,
    private articleService: ArticleService) { };

  onSelect(article: Article) {
    this.selectedArticle = article;
  };

  getArticles() {
    this.articleService.getArticles().then(articles => this.history = articles);
  }
  ngOnInit() {
    this.getArticles();
  }
  gotoDetail(article: Article) {
    let link = ['ArticleDetail', {name: article.name}];
    this.router.navigate(link);
  }
}
