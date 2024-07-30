import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCorbeilleComponent } from './afficher-corbeille.component';

describe('AfficherCorbeilleComponent', () => {
  let component: AfficherCorbeilleComponent;
  let fixture: ComponentFixture<AfficherCorbeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherCorbeilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfficherCorbeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
