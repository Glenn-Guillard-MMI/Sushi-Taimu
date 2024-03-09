import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveursComponent } from './saveurs.component';

describe('SaveursComponent', () => {
  let component: SaveursComponent;
  let fixture: ComponentFixture<SaveursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
