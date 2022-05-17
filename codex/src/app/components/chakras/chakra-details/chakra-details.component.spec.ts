import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakraDetailsComponent } from './chakra-details.component';

describe('ChakraDetailsComponent', () => {
  let component: ChakraDetailsComponent;
  let fixture: ComponentFixture<ChakraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakraDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
