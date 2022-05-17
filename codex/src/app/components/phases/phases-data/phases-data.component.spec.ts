import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesDataComponent } from './phases-data.component';

describe('PhasesDataComponent', () => {
  let component: PhasesDataComponent;
  let fixture: ComponentFixture<PhasesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
