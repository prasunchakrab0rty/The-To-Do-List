import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  clickMessage:string;
  keyupMessage:string;
  herolist = ['Batman'];
  clickMe() {
    this.clickMessage = 'List Is Cleared';
    this.herolist = ['Batman'];
  }
  addhero(hero:string){
    this.clickMessage = '';
    this.herolist.push(hero)
  }
  ngOnInit() {
  }

}
