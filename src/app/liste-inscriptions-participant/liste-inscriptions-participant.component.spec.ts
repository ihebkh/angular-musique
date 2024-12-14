import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscriptionsParticipantComponent } from './liste-inscriptions-participant.component';

describe('ListeInscriptionsParticipantComponent', () => {
  let component: ListeInscriptionsParticipantComponent;
  let fixture: ComponentFixture<ListeInscriptionsParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInscriptionsParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeInscriptionsParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
