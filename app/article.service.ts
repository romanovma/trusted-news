import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from './article';

@Injectable()
export class ArticleService {

  private articlesUrl = 'app/articles';  // URL to web api

  constructor(private http: Http) { }

  getArticles(): Promise<Article[]> {
    return this.http.get(this.articlesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  };

  getArticle(name: string) {
    return this.getArticles()
               .then(articles => articles.filter(article => article.name === name)[0]);
  };

  save(article: Article): Promise<Article>  {
    if (article.name) {
      return this.put(article);
    }
    return this.post(article);
  };

  delete(article: Article) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.articlesUrl}/${article.name}`;

    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  };

  // Add new Article
  private post(article: Article): Promise<Article> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.articlesUrl, JSON.stringify(article), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  };

  // Update existing Article
  private put(article: Article) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.articlesUrl}/${article.name}`;

    return this.http
               .put(url, JSON.stringify(article), {headers: headers})
               .toPromise()
               .then(() => article)
               .catch(this.handleError);
  };

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  };

}
