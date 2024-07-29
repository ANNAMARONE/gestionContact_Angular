import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteContactComponent } from './ajoute-contact.component';

describe('AjouteContactComponent', () => {
  let component: AjouteContactComponent;
  let fixture: ComponentFixture<AjouteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouteContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
