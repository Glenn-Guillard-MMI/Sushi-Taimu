import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaumonComponent } from './saumon.component';

describe('SaumonComponent', () => {
  let component: SaumonComponent;
  let fixture: ComponentFixture<SaumonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaumonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaumonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
