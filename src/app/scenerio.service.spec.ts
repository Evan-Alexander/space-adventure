import { TestBed, inject } from '@angular/core/testing';

import { ScenerioService } from './scenerio.service';

describe('ScenerioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenerioService]
    });
  });

  it('should ...', inject([ScenerioService], (service: ScenerioService) => {
    expect(service).toBeTruthy();
  }));
});
