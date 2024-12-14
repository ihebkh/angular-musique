import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvenementsCommentairesComponent } from './liste-evenements-commentaires.component';

describe('ListeEvenementsCommentairesComponent', () => {
  let component: ListeEvenementsCommentairesComponent;
  let fixture: ComponentFixture<ListeEvenementsCommentairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEvenementsCommentairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEvenementsCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
