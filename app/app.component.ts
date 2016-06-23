import {Component} from '@angular/core';

export class Article {
  name: string;
  date: number;
}

@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <div>
        <label>hehe</label>
        <input placeholder="select the article here" [(ngModel)]="article.name"/>
      </div>
      <div>{{article.name}}</div>
      <div>{{article.date}}</div>
      <h1>History</h1>
      <ul class="heroes">
        <li *ngFor="let article of history">
          {{article.name}}
        </li>
      </ul>
      `
})

export class AppComponent {
  title="Validate the article";
  article: Article = {
    name: 'tricky shmicky',
    date: 1
  }
  history = HISTORY;
}

const HISTORY: Article[] = [
  { date: 11, name: 'Mr. Nice' },
  { date: 12, name: 'Narco' },
  { date: 13, name: 'Bombasto' },
  { date: 14, name: 'Celeritas' },
  { date: 15, name: 'Magneta' },
  { date: 16, name: 'RubberMan' },
  { date: 17, name: 'Dynama' },
  { date: 18, name: 'Dr IQ' },
  { date: 19, name: 'Magma' },
  { date: 20, name: 'Tornado' }
];
