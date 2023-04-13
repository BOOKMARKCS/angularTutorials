import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAndRxJSComponent } from './observables-and-rx-js.component';

describe('ObservablesAndRxJSComponent', () => {
  let component: ObservablesAndRxJSComponent;
  let fixture: ComponentFixture<ObservablesAndRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesAndRxJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesAndRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
