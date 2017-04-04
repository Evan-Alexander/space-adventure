import { Injectable } from '@angular/core';
import { SCENERIO } from './mock-scenerio';
import { Scenerio } from './scenerio.model';

@Injectable()
export class ScenerioService {

  constructor() { }

  getScenerio(){
    return SCENERIO;
  }

}
