import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementsComponent } from './angular-elements.component';

describe('AngularElementsComponent', () => {
  let component: AngularElementsComponent;
  let fixture: ComponentFixture<AngularElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
