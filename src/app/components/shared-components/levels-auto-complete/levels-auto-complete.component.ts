import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleLevel } from 'src/app/models/RoleLevel';
import { AddUserService } from 'src/app/services/add-user.service';

@Component({
  selector: 'app-levels-auto-complete',
  templateUrl: './levels-auto-complete.component.html',
  styleUrls: ['./levels-auto-complete.component.css'],
})
export class LevelsAutoCompleteComponent implements OnInit {
  constructor(private addUserService: AddUserService) {}

  @Input() label?: string;
  @Input()
  form!: FormGroup;

  @Input() level!: FormControl;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() submitted = false;

  enableLevels = false;
  displayLevelsList = false;
  levelText = '';
  filtredLevelsList: RoleLevel[] = [];

  ngOnInit(): void {
    this.addUserService.enableLevels$.subscribe((b) => (this.enableLevels = b));
    this.addUserService.levelText$.subscribe((t) => (this.levelText = t));
    this.addUserService.displayLevelsList$.subscribe(
      (b) => (this.displayLevelsList = b)
    );
    this.addUserService.filtredLevelsList$.subscribe(
      (l) => (this.filtredLevelsList = l)
    );
  }

  setSelectedLevel(level: RoleLevel) {
    this.addUserService.setSelectedLevel(level);
  }

  closeLevelsList() {
    this.addUserService.closeLevelsList();
  }
  toggleLevelList() {
    this.addUserService.toggleLevelList();
  }
}
