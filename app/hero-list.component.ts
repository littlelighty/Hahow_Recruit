//用來顯示hero list(即每一個hero card)的component

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-list',
  templateUrl: `./hero-list.component.html`,
  styleUrls: [`./hero-list.component.css`],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  selectedHero: Hero;
  mode = 'Observable';

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes()
                     .then(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

  //讓程式非同步適時去執行getHeroes函式
  ngOnInit(): void {
    this.getHeroes();
  }

  //選取特定hero card
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}