import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  topArticles: Article[] = [];

  constructor(
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .then(articles => this.topArticles = articles.slice(1, 5));
  }
  gotoDetail(article: Article) {
    let link = ['ArticleDetail', {name: article.name}];
    this.router.navigate(link);
  }
}
