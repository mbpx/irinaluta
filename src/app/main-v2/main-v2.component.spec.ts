import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainV2Component } from './main-v2.component';

describe('MainPageComponent', () => {
  let component: MainV2Component;
  let fixture: ComponentFixture<MainV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
