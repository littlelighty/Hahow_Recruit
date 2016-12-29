//用來GET與PATCH hero的詳細屬性資料

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Profile } from './profile';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {
  constructor (private http: Http) {}

  //取得屬性資料
  getProfile(id: number): Promise<Profile>{
    var strGET='http://hahow-recruit.herokuapp.com/heroes/'+id+'/profile'
    return this.http.get(strGET)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  //針對取得之屬性資料做處理後回傳
  private extractData(res: Response) {
    return JSON.parse(res['_body']) || { };
  }

  //update屬性資料
  saveProfile(id: number, profile: Profile): Promise<Profile>{
    var strPATCH='http://hahow-recruit.herokuapp.com/heroes/'+id+'/profile'
    return this.http.patch(strPATCH, profile)
                    .toPromise()
                    .catch(this.handleError);
  }

  //錯誤情況處理與錯誤訊息留存
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