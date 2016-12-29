//用來GET hero的資料

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Hero } from './hero';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://hahow-recruit.herokuapp.com/heroes';

  constructor ( private http: Http ) {}

  //把所有hero資料取出，輸出後成為hero list
  getHeroes (): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(this.extractHeroesData);
  }

  //處理getHeroes取得的資料，以json格式去parse之後回傳
  private extractHeroesData(res: Response) {
    const json = JSON.parse(res['_body'])
    return json;
  }

  //透過參數傳入之id，針對個別hero取資料
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(this.extractHeroData);
  }

  //處理getHero取得的資料，以json格式去parse之後回傳，但這邊因為可能會有error出現，所以此時回傳null，讓hero-profile.component再call一次getHero
  private extractHeroData(res: Response) {
    const json = JSON.parse(res['_body'])
    if(json.code == 1000)
      return null
    else
      return json;
  }
}