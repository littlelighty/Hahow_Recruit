// 最上層component，下面有hero-list與hero-profile兩個component

import { Component } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{
  title = 'Hahow Recruit Project';

}
