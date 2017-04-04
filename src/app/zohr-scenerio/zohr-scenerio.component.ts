import { Component, OnInit } from '@angular/core';
import { Scenerio } from '../scenerio.model';
import { ScenerioService } from '../scenerio.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-zohr-scenerio',
  templateUrl: './zohr-scenerio.component.html',
  styleUrls: ['./zohr-scenerio.component.css'],
  providers: [ScenerioService]
})
export class ZohrScenerioComponent implements OnInit {
  scenerios: Scenerio[];
  eventId: number = null;
  scenerioToDisplay: Scenerio;

  constructor(
    private scenerioService: ScenerioService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = parseInt(urlParameters['eventId']);
      console.log(this.eventId);
    });
    this.scenerioToDisplay = this.scenerioService.getScenerioById(this.eventId);
    console.log(this.scenerioToDisplay);
  }
  ngDoCheck(){
    this.scenerioToDisplay = this.scenerioService.getScenerioById(this.eventId);
  }


  goToNextScenerio(actionId: number) {
    console.log("clicked goToNextScenerio");
    this.router.navigate(['zohr', actionId]);
  }



}
