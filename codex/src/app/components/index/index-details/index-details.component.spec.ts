import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDetailsComponent } from './index-details.component';

describe('IndexDetailsComponent', () => {
  let component: IndexDetailsComponent;
  let fixture: ComponentFixture<IndexDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
