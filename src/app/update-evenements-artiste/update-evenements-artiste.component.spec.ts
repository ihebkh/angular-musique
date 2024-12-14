import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEvenementsArtisteComponent } from './update-evenements-artiste.component';

describe('UpdateEvenementsArtisteComponent', () => {
  let component: UpdateEvenementsArtisteComponent;
  let fixture: ComponentFixture<UpdateEvenementsArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEvenementsArtisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEvenementsArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
