import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohrScenerioComponent } from './zohr-scenerio.component';

describe('ZohrScenerioComponent', () => {
  let component: ZohrScenerioComponent;
  let fixture: ComponentFixture<ZohrScenerioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohrScenerioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohrScenerioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
