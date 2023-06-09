import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalObservableUsageComponent } from './practical-observable-usage.component';

describe('PracticalObservableUsageComponent', () => {
  let component: PracticalObservableUsageComponent;
  let fixture: ComponentFixture<PracticalObservableUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalObservableUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalObservableUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
