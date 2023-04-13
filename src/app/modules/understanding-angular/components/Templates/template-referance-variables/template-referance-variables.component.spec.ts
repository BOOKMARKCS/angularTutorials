import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferanceVariablesComponent } from './template-referance-variables.component';

describe('TemplateReferanceVariablesComponent', () => {
  let component: TemplateReferanceVariablesComponent;
  let fixture: ComponentFixture<TemplateReferanceVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferanceVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferanceVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
