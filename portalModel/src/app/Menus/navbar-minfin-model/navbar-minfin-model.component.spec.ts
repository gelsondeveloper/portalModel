import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMinfinModelComponent } from './navbar-minfin-model.component';

describe('NavbarMinfinModelComponent', () => {
  let component: NavbarMinfinModelComponent;
  let fixture: ComponentFixture<NavbarMinfinModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMinfinModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMinfinModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
