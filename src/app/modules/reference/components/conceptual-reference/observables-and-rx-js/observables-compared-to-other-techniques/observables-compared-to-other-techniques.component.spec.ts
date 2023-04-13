import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesComparedToOtherTechniquesComponent } from './observables-compared-to-other-techniques.component';

describe('ObservablesComparedToOtherTechniquesComponent', () => {
  let component: ObservablesComparedToOtherTechniquesComponent;
  let fixture: ComponentFixture<ObservablesComparedToOtherTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesComparedToOtherTechniquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesComparedToOtherTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
