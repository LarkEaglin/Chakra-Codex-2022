import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalDetailsComponent } from './crystal-details.component';

describe('CrystalDetailsComponent', () => {
  let component: CrystalDetailsComponent;
  let fixture: ComponentFixture<CrystalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
