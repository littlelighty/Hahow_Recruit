import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { Profile } from './profile';
import { HeroService } from './hero.service';
import { ProfileService } from './profile.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-profile',
  templateUrl: `./hero-profile.component.html`,
  styleUrls: ['./hero-profile.component.css'],
  providers: [HeroService, ProfileService]
})
export class HeroProfileComponent implements OnInit {
  @Input()
  errorMessage: string;
  hero: Hero;
  profile: Profile;
  selectedHero: Hero;
  selectedProfile: Profile;
  total: number;
  skillPointLeft: number;
  heroes: Hero[];
  mode = 'Observable';
  prevHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getHeroes() {
    this.heroService.getHeroes()
                     .then(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

  getHero() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      console.log(this.hero);
  }

  getProfile() {
    this.route.params
      .switchMap((params: Params) => this.profileService.getProfile(+params['id']))
      .subscribe(profile => this.profile = profile);
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getHero();
    this.getProfile();
    // this.profile = {"str":5,"int":9,"agi":6,"luk":5}
    // this.profile = { }
  }
    // this.total=this.profile.str + this.profile.int + this.profile.agi + this.profile.luk;
    // this.profileService.getProfile(1)
    //   .then(profile => this.profile = profile);
    // this.profileService.getProfile(2)
    //   .then(profile => this.profile = profile);
    // this.profileService.getProfile(3)
    //   .then(profile => this.profile = profile);
    // this.profileService.getProfile(4)
    //   .then(profile => this.profile = profile);

    

  ngDoCheck() {
    if (this.hero) {
      if (this.prevHero === undefined || this.prevHero.id !== this.hero.id) {
        this.prevHero = this.hero
        this.onSelect(this.hero)
        
      }
    }
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate(['/heroes', this.selectedHero.id]);
    this.profileService.getProfile(this.selectedHero.id)
      .then(profile => {
        this.profile = profile
        this.total=this.profile.str + this.profile.int + this.profile.agi + this.profile.luk;
        this.skillPointLeft = this.total - (this.profile.str + this.profile.int + this.profile.agi + this.profile.luk);
      })
  }

  // selectOthers(): void {
  //   this.router.navigate(['/heroes', this.selectedHero.id]);
  //   this.profileService.getProfile(this.selectedHero.id)
  //     .then(profile => {
  //       this.profile = profile
  //       this.total=this.profile.str + this.profile.int + this.profile.agi + this.profile.luk;
  //       this.skillPointLeft = this.total - (this.profile.str + this.profile.int + this.profile.agi + this.profile.luk);
  //     })
  // }

  addStr() :void{
    if(this.skillPointLeft<=0)
      return;
    else{
      this.profile.str+=1;
      this.skillPointLeft-=1;
    }
  }

  minusStr() :void{
    if(this.profile.str<=0)
      return;
    else{
      this.profile.str-=1;
      this.skillPointLeft+=1;
    }
  }

  addInt() :void{
    if(this.skillPointLeft<=0)
      return;
    else{
      this.profile.int+=1;
      this.skillPointLeft-=1;
    }
  }

  minusInt() :void{
    if(this.profile.int<=0)
      return;
    else{
      this.profile.int-=1;
      this.skillPointLeft+=1;
    }
  }

  addAgi() :void{
    if(this.skillPointLeft<=0)
      return;
    else{
      this.profile.agi+=1;
      this.skillPointLeft-=1;
    }
  }

  minusAgi() :void{
    if(this.profile.agi<=0)
      return;
    else{
      this.profile.agi-=1;
      this.skillPointLeft+=1;
    }
  }

  addLuk() :void{
    if(this.skillPointLeft<=0)
      return;
    else{
      this.profile.luk+=1;
      this.skillPointLeft-=1;
    }
  }

  minusLuk() :void{
    if(this.profile.luk<=0)
      return;
    else{
      this.profile.luk-=1;
      this.skillPointLeft+=1;
    }
  }

  save() :void{
    console.log('yo')
    if(this.skillPointLeft==0){
      this.profileService.saveProfile(this.selectedHero.id, this.profile)
        .then((result) => {
          console.log(result)
      })
    }
  }


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/