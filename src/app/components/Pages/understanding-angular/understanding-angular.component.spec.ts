import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingAngularComponent } from './understanding-angular.component';

describe('UnderstandingAngularComponent', () => {
  let component: UnderstandingAngularComponent;
  let fixture: ComponentFixture<UnderstandingAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
