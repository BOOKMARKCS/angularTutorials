import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualReferenceComponent } from './conceptual-reference.component';

describe('ConceptualReferenceComponent', () => {
  let component: ConceptualReferenceComponent;
  let fixture: ComponentFixture<ConceptualReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptualReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptualReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
