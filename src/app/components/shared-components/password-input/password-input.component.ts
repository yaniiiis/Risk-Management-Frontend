import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent implements OnInit {
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
