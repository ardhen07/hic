import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajajPage } from './bajaj.page';

describe('BajajPage', () => {
  let component: BajajPage;
  let fixture: ComponentFixture<BajajPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajajPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajajPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
