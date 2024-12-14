import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesEvenementsComponent } from './liste-des-evenements.component';

describe('ListeDesEvenementsComponent', () => {
  let component: ListeDesEvenementsComponent;
  let fixture: ComponentFixture<ListeDesEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesEvenementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
