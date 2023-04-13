import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesInAngularComponent } from './observables-in-angular.component';

describe('ObservablesInAngularComponent', () => {
  let component: ObservablesInAngularComponent;
  let fixture: ComponentFixture<ObservablesInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesInAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
