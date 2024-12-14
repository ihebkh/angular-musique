import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterUtilisateurComponent } from './affecter-utilisateur.component';

describe('AffecterUtilisateurComponent', () => {
  let component: AffecterUtilisateurComponent;
  let fixture: ComponentFixture<AffecterUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
