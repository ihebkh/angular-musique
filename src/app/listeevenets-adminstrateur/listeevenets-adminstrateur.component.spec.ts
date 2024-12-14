import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeevenetsAdminstrateurComponent } from './listeevenets-adminstrateur.component';

describe('ListeevenetsAdminstrateurComponent', () => {
  let component: ListeevenetsAdminstrateurComponent;
  let fixture: ComponentFixture<ListeevenetsAdminstrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeevenetsAdminstrateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeevenetsAdminstrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
