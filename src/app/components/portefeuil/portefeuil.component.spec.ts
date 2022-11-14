import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilComponent } from './portefeuil.component';

describe('PortefeuilComponent', () => {
  let component: PortefeuilComponent;
  let fixture: ComponentFixture<PortefeuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefeuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
