import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolesAndPrivilegesComponent } from './add-roles-and-privileges.component';

describe('AddRolesAndPrivilegesComponent', () => {
  let component: AddRolesAndPrivilegesComponent;
  let fixture: ComponentFixture<AddRolesAndPrivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRolesAndPrivilegesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRolesAndPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
