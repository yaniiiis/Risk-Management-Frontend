import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompletInputComponent } from './auto-complet-input.component';

describe('AutoCompletInputComponent', () => {
  let component: AutoCompletInputComponent;
  let fixture: ComponentFixture<AutoCompletInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompletInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompletInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
