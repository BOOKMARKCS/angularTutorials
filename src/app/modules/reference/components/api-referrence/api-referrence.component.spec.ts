import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIReferrenceComponent } from './api-referrence.component';

describe('APIReferrenceComponent', () => {
  let component: APIReferrenceComponent;
  let fixture: ComponentFixture<APIReferrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIReferrenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIReferrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
