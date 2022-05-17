import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalDataComponent } from './crystal-data.component';

describe('CrystalDataComponent', () => {
  let component: CrystalDataComponent;
  let fixture: ComponentFixture<CrystalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
