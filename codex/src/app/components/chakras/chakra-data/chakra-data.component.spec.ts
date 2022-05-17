import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakraDataComponent } from './chakra-data.component';

describe('ChakraDataComponent', () => {
  let component: ChakraDataComponent;
  let fixture: ComponentFixture<ChakraDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakraDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakraDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
