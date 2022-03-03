import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGovAngolaComponent } from './line-gov-angola.component';

describe('LineGovAngolaComponent', () => {
  let component: LineGovAngolaComponent;
  let fixture: ComponentFixture<LineGovAngolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineGovAngolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGovAngolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
