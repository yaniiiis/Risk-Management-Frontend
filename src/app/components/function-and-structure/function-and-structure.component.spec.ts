import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAndStructureComponent } from './function-and-structure.component';

describe('FunctionAndStructureComponent', () => {
  let component: FunctionAndStructureComponent;
  let fixture: ComponentFixture<FunctionAndStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionAndStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionAndStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
