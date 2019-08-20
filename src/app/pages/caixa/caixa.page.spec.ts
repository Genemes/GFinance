import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaPage } from './caixa.page';

describe('CaixaPage', () => {
  let component: CaixaPage;
  let fixture: ComponentFixture<CaixaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
