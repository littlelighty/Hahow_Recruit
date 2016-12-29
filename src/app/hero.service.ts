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

  constructor (
    private http: Http
  ) {}
  idRec: number;

  //把所有hero資料取出，輸出後成為hero list
  getHeroes (): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  //處理get出來的資料，並對一些特殊情況(EX:"code":1000,"message":"Backend error")去做處理，但這邊還沒處理好，只是先都給第一個hero的資料
  private extractData(res: Response) {
    const json = JSON.parse(res['_body'])
    return json;
  }

  //透過參數傳入之id，針對個別hero取資料
  getHero(id: number): Promise<Hero> {
    this.idRec = id;
    const url = `${this.heroesUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(this.extractData2)
      .catch(this.handleError);
  }

  private extractData2(res: Response) {
    console.log(res);
    const json = JSON.parse(res['_body'])
    if(json.code == 1000){
      //document.getElementsByClassName("heroCard selected")[0].className='heroCard';
      //alert("Oops!! Something wrong fetching hero information. Please try again :)");
      // this.heroProfileComponent.cancelSelected();
      // this.getHero(this.idRec);
      //console.log("idRec = " + this.idRec);
      return null
    }
    else
      return json;
    // return json.code && json.code == 1000 ? {"id":"1","name":"Daredevil","image":"http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"} : json;
  }

  //錯誤情況處理與錯誤訊息留存
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } 
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}