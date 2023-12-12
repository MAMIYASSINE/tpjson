import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmployeeComponent } from './ajouter-employee.component';

describe('AjouterEmployeeComponent', () => {
  let component: AjouterEmployeeComponent;
  let fixture: ComponentFixture<AjouterEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterEmployeeComponent]
    });
    fixture = TestBed.createComponent(AjouterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
