import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyWorldComponent } from './fantasy-world.component';

describe('FantasyWorldComponent', () => {
  let component: FantasyWorldComponent;
  let fixture: ComponentFixture<FantasyWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
