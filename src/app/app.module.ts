import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroService }         from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
