import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'my-article-detail',
  templateUrl: 'app/article-detail.component.html'
})

export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private articleService: ArticleService,
    private routeParams: RouteParams) { }

  ngOnInit() {
    if (this.routeParams.get('name') !== null) {
      let name = this.routeParams.get('name');
      this.navigated = true;
      this.articleService.getArticle(name)
        .then(article => this.article = article);
    } else {
      this.navigated = false;
      this.article = new Article();
    }
  }

  save() {
    this.articleService
        .save(this.article)
        .then(article => {
          this.article = article; // saved hero, w/ id if new
          this.goBack(article);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedArticle: Article = null) {
    this.close.emit(savedArticle);
    if (this.navigated) { window.history.back(); }
  }
}
