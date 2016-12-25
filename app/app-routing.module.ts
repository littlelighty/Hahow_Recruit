// 定義routing的path與其對應的component的模組

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }      from './hero-list.component';
import { HeroProfileComponent }  from './hero-profile.component';

const routes: Routes = [
  { path: ':id', component: HeroProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
