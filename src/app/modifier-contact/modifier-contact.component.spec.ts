import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierContactComponent } from './modifier-contact.component';

describe('ModifierContactComponent', () => {
  let component: ModifierContactComponent;
  let fixture: ComponentFixture<ModifierContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
