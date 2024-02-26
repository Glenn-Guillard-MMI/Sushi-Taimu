import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIndexComponent } from './section-index.component';

describe('SectionIndexComponent', () => {
  let component: SectionIndexComponent;
  let fixture: ComponentFixture<SectionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
