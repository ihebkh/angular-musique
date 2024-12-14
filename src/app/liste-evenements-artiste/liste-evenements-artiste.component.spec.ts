import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvenementsArtisteComponent } from './liste-evenements-artiste.component';

describe('ListeEvenementsArtisteComponent', () => {
  let component: ListeEvenementsArtisteComponent;
  let fixture: ComponentFixture<ListeEvenementsArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEvenementsArtisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEvenementsArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
