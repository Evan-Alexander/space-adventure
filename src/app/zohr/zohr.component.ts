import { Component, OnInit } from '@angular/core';
import { Scenerio } from '../scenerio.model';
import { ScenerioService } from '../scenerio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-zohr',
  templateUrl: './zohr.component.html',
  styleUrls: ['./zohr.component.css'],
  providers: [ScenerioService]
})
export class ZohrComponent implements OnInit {
  scenerios: Scenerio[];

  constructor(private router: Router, private scenerioService: ScenerioService) { }

  ngOnInit() {
    this.scenerios = this.scenerioService.getScenerio();
    console.log(this.scenerios);
  }

}
