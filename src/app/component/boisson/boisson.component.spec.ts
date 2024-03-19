import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonComponent } from './boisson.component';

describe('BoissonComponent', () => {
  let component: BoissonComponent;
  let fixture: ComponentFixture<BoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoissonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
