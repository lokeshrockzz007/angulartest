import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes: Hero[];
    hero : Hero = {
      id:1,
      name:'lokesh'
    };
    delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}
 add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
selectedHero : Hero;

onSelect(hero:Hero):void
{
this.selectedHero=hero;
}
  constructor(private heroService: HeroService) {




   }

  ngOnInit() {
this.getHeroes();


  }

}