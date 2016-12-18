import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Profile } from './profile';

import { PROFILE1 } from './mock-profile1';
import { PROFILE2 } from './mock-profile2';
import { PROFILE3 } from './mock-profile3';
import { PROFILE4 } from './mock-profile4';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {
  private profileUrl = 'http://hahow-recruit.herokuapp.com/heroes/';

  constructor (private http: Http) {}

  getProfile(id: number): Promise<Profile>{
    var strGET='http://hahow-recruit.herokuapp.com/heroes/'+id+'/profile'
    return this.http.get(strGET)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    console.log(res);
    return JSON.parse(res['_body']) || { };
  }

    saveProfile(id: number, profile: Profile): Promise<Profile>{
    var strPATCH='http://hahow-recruit.herokuapp.com/heroes/'+id+'/profile'
    return this.http.patch(strPATCH, profile)
                    .toPromise()
                    .catch(this.handleError);
  }

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