import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIInActionComponent } from './di-in-action.component';

describe('DIInActionComponent', () => {
  let component: DIInActionComponent;
  let fixture: ComponentFixture<DIInActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIInActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
