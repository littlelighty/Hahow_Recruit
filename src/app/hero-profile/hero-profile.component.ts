//用來顯示個別hero的詳細屬性的component

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { Profile } from '../profile';
import { HeroService } from '../hero.service';
import { ProfileService } from '../profile.service';

@Component({
  // moduleId: module.id,
  selector: 'my-hero-profile',
  templateUrl: `./hero-profile.component.html`,
  styleUrls: ['./hero-profile.component.scss'],
  providers: [HeroService, ProfileService]
})

export class HeroProfileComponent implements OnInit {
  @Input()
  errorMessage: string;
  hero: Hero;
  profile: Profile;
  total: number;
  skillPointLeft: number;
  mode = 'Observable';
  
  constructor(
    private router: Router,
    private heroService: HeroService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //呼叫heroService，取得個別hero資料
  getHero(id: number) {
    this.heroService.getHero(id).then(hero=>{
      if(hero==null)
        this.getHero(id);
      else
        this.hero=hero;
    });
  }

  //呼叫profileService，取得個別hero詳細屬性，同時計算該hero的屬性加總與剩餘點數
  getProfile(id: number) {
    this.profileService.getProfile(id).then(profile=>{
      this.profile=profile;
      this.total=this.profile.str+this.profile.int+this.profile.agi+this.profile.luk;
      this.skillPointLeft=this.total-(this.profile.str+this.profile.int+this.profile.agi+this.profile.luk);
    });
  }

  //讓程式非同步適時去執行上面的 getHero & getProfile
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getHero(id);
      this.getProfile(id);
    });
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
    if(this.skillPointLeft==0){
      this.profileService.saveProfile(this.hero.id, this.profile)
        .then((result) => {
          console.log(result)
      })
    }
  }

  cancelSelected() :void{
    document.getElementsByClassName("heroCard selected")[0].className='heroCard';
  }
}
