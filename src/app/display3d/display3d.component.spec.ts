import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display3D } from './display3d.component';

describe('Display3D', () => {
  let component: Display3D;
  let fixture: ComponentFixture<Display3D>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display3D ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display3D);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
