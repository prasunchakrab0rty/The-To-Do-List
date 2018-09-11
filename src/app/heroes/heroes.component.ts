import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {heroes} from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() {     
  }
  heroes = heroes;
  selectedHero : Hero;
  
  ngOnInit() {
  }
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
