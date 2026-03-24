import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandName } from './brand-name';

describe('BrandName', () => {
  let component: BrandName;
  let fixture: ComponentFixture<BrandName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandName],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
