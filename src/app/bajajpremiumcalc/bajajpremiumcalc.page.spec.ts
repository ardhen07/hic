import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajajpremiumcalcPage } from './bajajpremiumcalc.page';

describe('BajajpremiumcalcPage', () => {
  let component: BajajpremiumcalcPage;
  let fixture: ComponentFixture<BajajpremiumcalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajajpremiumcalcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajajpremiumcalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
