import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {
  private heroesUrl = 'http://hahow-recruit.herokuapp.com/heroes';

  constructor (private http: Http) {}

  getHeroes (): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res);
    // let body = res.json();
    return JSON.parse(res['_body']) || { };
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }
  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }

   private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}