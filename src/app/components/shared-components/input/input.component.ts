import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() label?: string;
  @Input()
  form!: FormGroup;

  @Input() specificFormControl!: FormControl;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() submitted = false;

  ngOnInit(): void {}
}
