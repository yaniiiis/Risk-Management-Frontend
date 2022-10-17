import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Privilege } from 'src/app/models/Privilege';
import { privilegeList } from 'src/app/shared/privilegesList';

@Component({
  selector: 'app-add-roles-and-privileges',
  templateUrl: './add-roles-and-privileges.component.html',
  styleUrls: ['./add-roles-and-privileges.component.css'],
})
export class AddRolesAndPrivilegesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  submitted = false;
  displayPrivilege = false;

  listPrivileges: Privilege[] = privilegeList;
  listOfChoosedPrivileges: any[] = [];

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

  ngOnInit(): void {}
}
