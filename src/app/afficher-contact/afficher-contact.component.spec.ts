import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherContactComponent } from './afficher-contact.component';

describe('AfficherContactComponent', () => {
  let component: AfficherContactComponent;
  let fixture: ComponentFixture<AfficherContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfficherContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
