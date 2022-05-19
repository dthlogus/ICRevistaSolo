import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRevistasComponent } from './main-revistas.component';

describe('MainRevistasComponent', () => {
  let component: MainRevistasComponent;
  let fixture: ComponentFixture<MainRevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
