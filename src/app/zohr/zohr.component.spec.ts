import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohrComponent } from './zohr.component';

describe('ZohrComponent', () => {
  let component: ZohrComponent;
  let fixture: ComponentFixture<ZohrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
