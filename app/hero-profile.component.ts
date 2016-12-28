//用來顯示個別hero的詳細屬性的component

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

  //取得個別hero資料
  getHero(id: number) {
    console.log("in getHero, id = " + id);
    return this.heroService.getHero(id).then(hero=>this.hero=hero);
  }

  //取得個別hero詳細屬性
  getProfile(id: number) {
    console.log("in getProfile, id = " + id);
    return this.profileService.getProfile(id).then(profile=>this.profile=profile);
  }

  //讓程式非同步適時去執行3個函式
  ngOnInit(): void {
    // this.getHeroes();
    this.route.params.forEach((params: Params) => {
      console.log("in ngOnInit, params = " + params);
      let id = +params['id'];
      this.getHero(id).then(hero=>{
        console.log("in ngOnInit getHero, id = " + id);
        console.log("in ngOnInit getHero, hero = " + this.hero);
      });
      this.getProfile(id).then(profile=>{
        console.log("in ngOnInit getProfile, profile = " + this.profile);
        this.total=this.profile.str+this.profile.int+this.profile.agi+this.profile.luk;
        this.skillPointLeft=this.total-(this.profile.str+this.profile.int+this.profile.agi+this.profile.luk);
      });
    });
    console.log("End of ngOnInit, profile = " + this.profile + ", hero = " + this.hero);
  }

  //下列為屬性能力值加減按鈕用之函式
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

  //將更改完之能力值update
  save() :void{
    // console.log('yo')
    if(this.skillPointLeft==0){
      this.profileService.saveProfile(this.selectedHero.id, this.profile)
        .then((result) => {
          console.log(result)
      })
    }
  }
}
