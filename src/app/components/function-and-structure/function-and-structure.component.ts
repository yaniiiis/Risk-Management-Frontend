import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-function-and-structure',
  templateUrl: './function-and-structure.component.html',
  styleUrls: ['./function-and-structure.component.css'],
})
export class FunctionAndStructureComponent implements OnInit {
  constructor() {}

  @Input()
  formGroup?: FormGroup;

  ngOnInit(): void {}
}
