import { Injectable } from '@angular/core';
import { Role } from '../models/Role';
import { RoleLevel } from '../models/RoleLevel';
import { BehaviorSubject, of, map, tap } from 'rxjs';
import { roleLevelsList } from '../shared/roleLevelsList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.httpClient
      .get<Role[]>('http://localhost:3000/roles')
      .subscribe((r) => (this.roles = r));
  }

  roles: Role[] = [];
  filteredRoles: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);

  selectedRole = new BehaviorSubject<Role | undefined>(undefined);
  enableLevels = new BehaviorSubject<boolean>(false);
  displayLevelsList = new BehaviorSubject<boolean>(false);
  selectedLevel = new BehaviorSubject<RoleLevel | undefined>(undefined);
  levelText = new BehaviorSubject<string>('Choisissez un niveau pour ce role');
  filtredLevelsList: BehaviorSubject<RoleLevel[]> = new BehaviorSubject<
    RoleLevel[]
  >([]);
  registerForm = new BehaviorSubject<FormGroup>(
    this.fb.group({
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
    })
  );

  filteredRoles$ = this.filteredRoles.asObservable();
  selectedRole$ = this.selectedRole.asObservable();
  enableLevels$ = this.enableLevels.asObservable();
  displayLevelsList$ = this.displayLevelsList.asObservable();
  selectedLevel$ = this.selectedLevel.asObservable();
  levelText$ = this.levelText.asObservable();
  filtredLevelsList$ = this.filtredLevelsList.asObservable();
  registerForm$ = this.registerForm.asObservable();

  getRoles() {
    const roles = this.httpClient.get<Role[]>('http://localhost:3000/roles');
    return roles;
  }

  addUser(data: any) {
    this.httpClient
      .post('http://localhost:3000/', data)
      .subscribe((r) => console.log(' from http request  :   ', r));
  }

  getPrivileges() {
    const privileges = this.httpClient.get<Role[]>(
      'http://localhost:3000/privileges'
    );
    return privileges;
  }

  setFiltredRoles(event: Event, role: string) {
    console.log('roole', role);
    if (String(event) != this.selectedRole?.value?.name) {
      console.log('event : ' + event);
      this.selectedRole?.next(undefined);
      this.enableLevels.next(false);
      this.levelText.next('Choisissez un niveau pour ce role');
      this.filtredLevelsList.next([]);
    }

    if (role) {
      if (role == '') {
        this.filteredRoles.next([]);
      } else
        this.filteredRoles.next(
          this.roles.filter((r) =>
            r.name.toLowerCase().includes(role.toLowerCase())
          )
        );
      // console.log(this.filteredRoles);
    }
    console.log('selected role : ', this.selectedRole);
  }

  setLevelsList(role: Role) {
    this.filtredLevelsList.next(
      roleLevelsList.filter((level) => level.role_id == role.id)
    );
  }

  setSelectedLevel(level: RoleLevel) {
    this.selectedLevel.next(level);
    this.levelText.next(level.name);
  }

  setSelecedRole(r: Role) {
    this.selectedRole?.next(r);
    const aa = this.registerForm.value;
    aa.patchValue({ role: r.name });
    this.registerForm.next(aa);
    // this.registerForm.patchValue({ role: r.name });
    this.filteredRoles.next([]);
    console.log('selected role : ', this.selectedRole);
    this.setLevelsList(r);
    this.enableLevels.next(true);
  }

  resetFiltredRoles() {
    this.filteredRoles.next([]);
  }

  toggleLevelList() {
    if (this.enableLevels.value) {
      // console.log('here we are ', this.filtredLevelsList);
      this.displayLevelsList.next(!this.displayLevelsList.value);
      console.log('oo oo ', this.displayLevelsList);
    }
  }

  closeLevelsList() {
    this.displayLevelsList.next(false);
  }
}
