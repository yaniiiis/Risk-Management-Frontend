import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterStepsService {
  constructor() {}

  step: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  step$ = this.step.asObservable();

  setStep(step: number) {
    this.step.next(step);
  }
}
