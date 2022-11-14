import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Agency } from 'src/app/models/Agency';
import { Role } from 'src/app/models/Role';
import { RoleLevel } from 'src/app/models/RoleLevel';
import { AddUserService } from 'src/app/services/add-user.service';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  constructor(
    private registerStepService: RegisterStepsService,
    private fb: FormBuilder,
    private addUserService: AddUserService
  ) {}

  filtredRolesSubscribtion?: Subscription;
  selectedRoleSubscribtion?: Subscription;
  registerFormSubscribtion?: Subscription;
  displayLevelsListSubscrition?: Subscription;
  levelTextSubscrition?: Subscription;
  selectedLevelSubscrition?: Subscription;
  enableLevelSubscrition?: Subscription;
  filtredLevelListSubscription?: Subscription;

  ngOnInit(): void {
    this.addUserService.getRoles().subscribe((r) => (this.allRoleLiset = r));

    this.filtredRolesSubscribtion =
      this.addUserService.filteredRoles$.subscribe(
        (f) => (this.filteredRoles = f)
      );
    this.selectedRoleSubscribtion = this.addUserService.selectedRole$.subscribe(
      (r) => (this.selectedRole = r)
    );
    this.registerFormSubscribtion = this.addUserService.registerForm$.subscribe(
      (form) => (this.registerForm = form)
    );
    this.displayLevelsListSubscrition =
      this.addUserService.displayLevelsList$.subscribe(
        (b) => (this.displayLevelsList = b)
      );
    this.levelTextSubscrition = this.addUserService.levelText$.subscribe(
      (t) => (this.levelText = t)
    );
    this.selectedLevelSubscrition =
      this.addUserService.selectedLevel$.subscribe(
        (l) => (this.selectedLevel = l)
      );
    this.enableLevelSubscrition = this.addUserService.enableLevels$.subscribe(
      (b) => (this.enableLevels = b)
    );
    this.filtredLevelListSubscription =
      this.addUserService.filtredLevelsList$.subscribe(
        (l) => (this.filtredLevelsList = l)
      );
  }

  ngOnDestroy(): void {
    this.filtredRolesSubscribtion?.unsubscribe();
    this.selectedRoleSubscribtion?.unsubscribe();
    this.registerFormSubscribtion?.unsubscribe();
    this.displayLevelsListSubscrition?.unsubscribe();
    this.levelTextSubscrition?.unsubscribe();
    this.selectedLevelSubscrition?.unsubscribe();
    this.enableLevelSubscrition?.unsubscribe();
    this.filtredLevelListSubscription?.unsubscribe();
  }

  selectedRole?: Role;
  selectedLevel?: RoleLevel;

  proposedAgency = '';
  selectedAgency?: Agency;
  enableLevels = false;
  displayLevelsList = false;
  submitted = false;
  passwordNotMatch = false;

  levelText = ' Choisissez un niveau pour ce role';

  allRoleLiset: Role[] = [];
  filteredRoles: Role[] = [];
  filtredLevelsList: RoleLevel[] = [];
  filteredAgencies: Agency[] = [];

  // roleAgencyForm = this.fb.group({
  //   role: [''],
  //   agency: [''],
  // });

  max = 40;
  nameString = 'Nom';
  functionString = 'Fonction';
  firstNameString = 'Prénom';
  structureString = 'structure';
  identifiantString = 'Identifiant';
  passwordString = 'Mot de passe';
  confirmPasswordString = 'Confirmer mot de passe';
  addString = 'Ajouter';

  registerForm = this.fb.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    identifiant: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    function: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    structure: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    role: ['', [Validators.required]],
    level: ['', [Validators.required]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    agency: [''],
  });

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get identifiant() {
    return this.registerForm.get('identifiant');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get function() {
    return this.registerForm.get('function');
  }
  get structure() {
    return this.registerForm.get('structure');
  }
  get role() {
    return this.registerForm.get('role');
  }

  setLevelsList(role: Role) {
    this.addUserService.setLevelsList(role);
    // this.filtredLevelsList = roleLevelsList.filter(
    //   (level) => level.role_id == role.id
    // );
  }

  setSelecedRole(r: Role) {
    this.addUserService.setSelecedRole(r);
    // this.selectedRole = r;
    // this.registerForm.patchValue({ role: r.name });
    // this.filteredRoles = [];
    // console.log('selected role : ', this.selectedRole);
    // this.setLevelsList(r);
    // this.enableLevels = true;
  }

  setSelectedLevel(level: RoleLevel) {
    this.addUserService.setSelectedLevel(level);
    // this.selectedLevel = level;
    // this.levelText = level.name;
  }

  toggleLevelList() {
    if (this.enableLevels) {
      this.displayLevelsList = !this.displayLevelsList;
    }
  }

  closeLevelsList() {
    this.displayLevelsList = false;
  }

  setFiltredRoles(event: Event) {
    this.addUserService.setFiltredRoles(event, this.registerForm.value.role!);
    // if (String(event) != this.selectedRole?.name) {
    //   console.log('event : ' + event);
    //   this.selectedRole = undefined;
    //   this.enableLevels = false;
    //   this.levelText = ' Choisissez un niveau pour ce role';
    //   this.filtredLevelsList = [];
    // }
    // if (this.registerForm.value.role) {
    //   if (this.registerForm.value.role == '') {
    //     this.filteredRoles = [];
    //   } else
    //     this.filteredRoles = rolesList.filter((r) =>
    //       r.name
    //         .toLowerCase()
    //         .includes(this.registerForm.value.role!.toLowerCase())
    //     );
    //   // console.log(this.filteredRoles);
    // }
    // console.log('selected role : ', this.selectedRole);
  }

  changed() {
    console.log('aaaaaaaaa');
    console.log(this.registerForm);
    this.registerForm.patchValue({ firstName: 'aaaa' });
  }
  //reset list of filtred roles
  restFiltredRoles() {
    this.filteredRoles = [];
  }

  //on form submit
  onSubmit() {
    this.submitted = true;

    console.log('password : ' + this.registerForm.value.password);
    // this.registerStepService.step.next(1);
    if (this.registerForm.valid) {
      if (
        this.registerForm.value.password !=
        this.registerForm.value.confirmPassword
      ) {
        return (this.passwordNotMatch = true);
      }
      this.passwordNotMatch = false;
      this.addUserService.addUser(this.registerForm.value);
      return console.log('valid : ', this.registerForm.value);
    }
  }
}
