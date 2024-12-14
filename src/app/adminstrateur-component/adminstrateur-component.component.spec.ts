import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrateurComponentComponent } from './adminstrateur-component.component';

describe('AdminstrateurComponentComponent', () => {
  let component: AdminstrateurComponentComponent;
  let fixture: ComponentFixture<AdminstrateurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrateurComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminstrateurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
