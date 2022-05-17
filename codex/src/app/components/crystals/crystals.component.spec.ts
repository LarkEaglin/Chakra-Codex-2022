import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalsComponent } from './crystals.component';

describe('CrystalsComponent', () => {
  let component: CrystalsComponent;
  let fixture: ComponentFixture<CrystalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
