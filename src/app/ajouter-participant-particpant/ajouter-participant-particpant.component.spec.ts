import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterParticipantParticpantComponent } from './ajouter-participant-particpant.component';

describe('AjouterParticipantParticpantComponent', () => {
  let component: AjouterParticipantParticpantComponent;
  let fixture: ComponentFixture<AjouterParticipantParticpantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterParticipantParticpantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterParticipantParticpantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
