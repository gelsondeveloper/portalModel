import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLineGovComponent } from './main-line-gov.component';

describe('MainLineGovComponent', () => {
  let component: MainLineGovComponent;
  let fixture: ComponentFixture<MainLineGovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLineGovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLineGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
