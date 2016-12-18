import { Injectable } from '@angular/core';

import { Profile } from './profile';
import { PROFILE1 } from './mock-profile1';
import { PROFILE2 } from './mock-profile2';
import { PROFILE3 } from './mock-profile3';
import { PROFILE4 } from './mock-profile4';

@Injectable()
export class ProfileService {
  getProfile(id: number): Promise<Profile>{
    // var p = "PROFILE" + id;
    return Promise.resolve(PROFILE1);
  }
  // getProfile1(): Promise<Profile>{
  //   return Promise.resolve(PROFILE1);
  // }
  // getProfile2(): Promise<Profile>{
  //   return Promise.resolve(PROFILE2);
  // }
  // getProfile3(): Promise<Profile>{
  //   return Promise.resolve(PROFILE3);
  // }
  // getProfile4(): Promise<Profile>{
  //   return Promise.resolve(PROFILE4);
  // }
}