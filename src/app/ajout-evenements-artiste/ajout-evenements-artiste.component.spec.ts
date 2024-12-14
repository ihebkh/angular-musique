import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEvenementsArtisteComponent } from './ajout-evenements-artiste.component';

describe('AjoutEvenementsArtisteComponent', () => {
  let component: AjoutEvenementsArtisteComponent;
  let fixture: ComponentFixture<AjoutEvenementsArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEvenementsArtisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEvenementsArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
