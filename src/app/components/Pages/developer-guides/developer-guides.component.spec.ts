import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGuidesComponent } from './developer-guides.component';

describe('DeveloperGuidesComponent', () => {
  let component: DeveloperGuidesComponent;
  let fixture: ComponentFixture<DeveloperGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
