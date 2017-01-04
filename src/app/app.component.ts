// 最上層component，下面有hero-list與hero-profile兩個component

import { Component } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'Hahow Recruit Project';
}
