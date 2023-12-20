import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display3Dv1 } from './display3d-v1.component';

describe('Display3D', () => {
  let component: Display3Dv1;
  let fixture: ComponentFixture<Display3Dv1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display3Dv1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display3Dv1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
