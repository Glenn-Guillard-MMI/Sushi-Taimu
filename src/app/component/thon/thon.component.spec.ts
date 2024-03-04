import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThonComponent } from './thon.component';

describe('ThonComponent', () => {
  let component: ThonComponent;
  let fixture: ComponentFixture<ThonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
