import { Injectable } from '@angular/core';
import { SCENERIO } from './mock-scenerio';
import { Scenerio } from './scenerio.model';

@Injectable()
export class ScenerioService {

  constructor() { }

  getScenerio(){
    return SCENERIO;
  }

  getScenerioById(eventId: number) {
    console.log("loading");
    for(var i = 0; i<=SCENERIO.length - 1; i++) {
      if (SCENERIO[i].eventId === eventId) {
        return SCENERIO[i];
      }
    }
  }

}
