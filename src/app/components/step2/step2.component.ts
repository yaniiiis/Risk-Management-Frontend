import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role';
import { rolesList } from 'src/app/shared/rolesList';
import { FormControl, FormBuilder } from '@angular/forms';
import { Agency } from 'src/app/models/Agency';
import { agenciesList } from 'src/app/shared/agenciesList';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  constructor(
    private registerStepService: RegisterStepsService,
    private fb: FormBuilder
  ) {}

  selectedRole?: Role;

  proposedAgency = '';
  selectedAgency?: Agency;

  roleAgencyForm = this.fb.group({
    role: [''],
    agency: [''],
  });

  setSelecedRole(r: Role) {
    this.selectedRole = r;
    this.roleAgencyForm.patchValue({ role: r.name });
    this.filteredRoles = [];
    console.log('selected role : ', this.selectedRole);
  }

  setSelectedAgency(agency: Agency) {
    this.selectedAgency = agency;
    this.roleAgencyForm.patchValue({ agency: agency.name });
    this.filteredAgencies = [];

    // this.selectedAgency = agency;
    // this.proposedAgency = agency.name;
    // this.filteredAgencies = [];
    console.log('selected agency : ', this.selectedAgency);
  }

  roleFormControl = new FormControl();
  agencyFormControl = new FormControl();

  filteredRoles: Role[] = [];
  filteredAgencies: Agency[] = [];

  restFiltredRoles() {
    this.filteredRoles = [];
  }

  resetFiltredAgencies() {
    this.filteredAgencies = [];
  }

  setFiltredAgencies() {
    // console.log('agency ', this.proposedAgency);
    if (this.roleAgencyForm.value.agency) {
      if (this.roleAgencyForm.value.agency == '') this.filteredAgencies = [];
      else
        this.filteredAgencies = agenciesList.filter((a) =>
          a.name
            .toLowerCase()
            .includes(this.roleAgencyForm.value.agency!.toLowerCase())
        );
      // console.log('aaaaaa ', this.filteredAgencies);
    }
  }

  setFiltredRoles() {
    if (this.roleAgencyForm.value.role) {
      if (this.roleAgencyForm.value.role == '') this.filteredRoles = [];
      else
        this.filteredRoles = rolesList.filter((r) =>
          r.name
            .toLowerCase()
            .includes(this.roleAgencyForm.value.role!.toLowerCase())
        );
      // console.log(this.filteredRoles);
    }
  }

  backToFirstStep() {
    this.registerStepService.step.next(0);
  }

  ngOnInit(): void {}
}
