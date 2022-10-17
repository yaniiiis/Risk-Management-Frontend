import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsAutoCompleteComponent } from './levels-auto-complete.component';

describe('LevelsAutoCompleteComponent', () => {
  let component: LevelsAutoCompleteComponent;
  let fixture: ComponentFixture<LevelsAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsAutoCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
