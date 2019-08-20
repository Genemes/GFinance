import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignadoPage } from './consignado.page';

describe('ConsignadoPage', () => {
  let component: ConsignadoPage;
  let fixture: ComponentFixture<ConsignadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
