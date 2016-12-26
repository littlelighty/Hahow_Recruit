// 最上層component，下面有hero-list與hero-profile兩個component

import { Component } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <hero-list>Loading Hero List...</hero-list>
  `
})
export class AppComponent{
  title = 'Hahow Recruit Project';

}
