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
  
  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}