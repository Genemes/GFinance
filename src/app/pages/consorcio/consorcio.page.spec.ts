import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorcioPage } from './consorcio.page';

describe('ConsorcioPage', () => {
  let component: ConsorcioPage;
  let fixture: ComponentFixture<ConsorcioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsorcioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsorcioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
