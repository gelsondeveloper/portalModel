import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchImputComponent } from './search-imput.component';

describe('SearchImputComponent', () => {
  let component: SearchImputComponent;
  let fixture: ComponentFixture<SearchImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchImputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
