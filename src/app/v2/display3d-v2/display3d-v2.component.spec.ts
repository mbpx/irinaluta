import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display3Dv2 } from './display3d-v2.component';

describe('Display3D', () => {
  let component: Display3Dv2;
  let fixture: ComponentFixture<Display3Dv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display3Dv2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display3Dv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
