import { Component} from '@angular/core';
import { Character } from '../character.model';
import { Scenerio } from '../scenerio.model';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  newCharacter: Character;
  show: boolean = true;
  // constructor() { }

  submitNewName(name, id) {
    this.newCharacter = new Character(name, id);
    console.log(this.newCharacter);
  }
}
