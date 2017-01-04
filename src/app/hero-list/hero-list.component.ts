//用來顯示hero list(即每一個hero card)的component

import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: `./hero-list.component.html`,
  styleUrls: [`./hero-list.component.scss`],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  selectedHero: Hero;
  mode = 'Observable';

  constructor(private heroService: HeroService) { }

  //呼叫heroService，取得hero清單
  getHeroes() {
    this.heroService.getHeroes().then(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error
    );
  }s

  //讓程式非同步適時去執行getHeroes函式
  ngOnInit(): void {
    this.getHeroes();    
  }

  //選取特定hero card、更改class、加上橘色框線與陰影
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    document.getElementsByClassName("heroList__heroCard")[hero.id-1].className="heroList__heroCard selected";
  }
}