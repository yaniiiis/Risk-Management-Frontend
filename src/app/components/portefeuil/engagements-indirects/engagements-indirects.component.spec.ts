import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementsIndirectsComponent } from './engagements-indirects.component';

describe('EngagementsIndirectsComponent', () => {
  let component: EngagementsIndirectsComponent;
  let fixture: ComponentFixture<EngagementsIndirectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementsIndirectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementsIndirectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
