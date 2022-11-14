import { Component, OnInit } from '@angular/core';
import { RegisterStepsService } from 'src/app/services/register-steps.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private registerStepService: RegisterStepsService) {}

  step = 0;

  ngOnInit(): void {
    this.registerStepService.step$.subscribe((step) => (this.step = step));
  }
}
