import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesDetailsComponent } from './phases-details.component';

describe('PhasesDetailsComponent', () => {
  let component: PhasesDetailsComponent;
  let fixture: ComponentFixture<PhasesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
