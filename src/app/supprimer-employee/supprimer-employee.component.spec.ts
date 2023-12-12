import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEmployeeComponent } from './supprimer-employee.component';

describe('SupprimerEmployeeComponent', () => {
  let component: SupprimerEmployeeComponent;
  let fixture: ComponentFixture<SupprimerEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimerEmployeeComponent]
    });
    fixture = TestBed.createComponent(SupprimerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
