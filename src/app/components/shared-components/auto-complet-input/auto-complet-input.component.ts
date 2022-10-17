import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Role } from 'src/app/models/Role';
import { AddUserService } from 'src/app/services/add-user.service';

@Component({
  selector: 'app-auto-complet-input',
  templateUrl: './auto-complet-input.component.html',
  styleUrls: ['./auto-complet-input.component.css'],
})
export class AutoCompletInputComponent implements OnInit {
  constructor(private addUserService: AddUserService) {}

  @Input()
  role!: FormControl;

  @Input()
  submitted = false;

  filteredRoles: Role[] = [];

  ngOnInit(): void {
    this.addUserService.filteredRoles$.subscribe((f) => {
      this.filteredRoles = f;
      console.log('fffff ', f);
    });
  }

  setFiltredRoles(event: Event) {
    this.addUserService.setFiltredRoles(event, this.role.value);
  }

  setSelecedRole(role: Role) {
    this.addUserService.setSelecedRole(role);
  }

  resetFiltredRoles() {
    this.addUserService.resetFiltredRoles();
  }
}
