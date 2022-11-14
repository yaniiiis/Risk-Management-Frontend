import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Privilege } from 'src/app/models/Privilege';
import { AddRoleService } from 'src/app/services/add-role.service';
import { privilegeList } from 'src/app/shared/privilegesList';

@Component({
  selector: 'app-add-roles-and-privileges',
  templateUrl: './add-roles-and-privileges.component.html',
  styleUrls: ['./add-roles-and-privileges.component.css'],
})
export class AddRolesAndPrivilegesComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private addRoleService: AddRoleService
  ) {}

  ngOnInit(): void {
    this.addRoleService
      .getPrivilege()
      .subscribe((p) => (this.listPrivileges = p));
  }
  ngOnDestroy(): void {}

  submitted = false;
  displayPrivilege = false;

  listPrivileges: Privilege[] = [];
  listOfChoosedPrivileges: any[] = [];

  roleString = 'Role';
  addString = 'Ajouter';

  roleForm = this.fb.group({
    role: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
  });

  get role() {
    return this.roleForm.get('role');
  }

  onSubmit() {
    this.submitted = true;

    if (this.roleForm.valid && this.listOfChoosedPrivileges.length > 0) {
      console.log({
        roleName: this.role?.value,
        privilges: this.listOfChoosedPrivileges,
      });

      const data = {
        role_name: this.roleForm.value.role,
        privileges: this.listOfChoosedPrivileges,
      };

      this.addRoleService.submit(data);
    }
  }

  toggleDisplayPrivilege() {
    this.displayPrivilege = !this.displayPrivilege;
  }

  addToChoosedPrivilege(privilege: Privilege) {
    console.log('cliicked');
    this.listOfChoosedPrivileges.push(privilege);
    this.listPrivileges = this.listPrivileges.filter(
      (p) => p.id != privilege.id
    );
  }

  removePrivilege(privilege: Privilege) {
    const filtredPrivileges = this.listOfChoosedPrivileges.filter(
      (p) => p.id != privilege.id
    );
    this.listOfChoosedPrivileges = filtredPrivileges;
    this.listPrivileges.push(privilege);
  }

  closePrivilegesList() {
    this.displayPrivilege = false;
  }
}
