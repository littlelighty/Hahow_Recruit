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
