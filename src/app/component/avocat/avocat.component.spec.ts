import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocatComponent } from './avocat.component';

describe('AvocatComponent', () => {
  let component: AvocatComponent;
  let fixture: ComponentFixture<AvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvocatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
