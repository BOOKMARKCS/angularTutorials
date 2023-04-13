import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepecdencyInJectionComponent } from './depecdency-in-jection.component';

describe('DepecdencyInJectionComponent', () => {
  let component: DepecdencyInJectionComponent;
  let fixture: ComponentFixture<DepecdencyInJectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepecdencyInJectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepecdencyInJectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
