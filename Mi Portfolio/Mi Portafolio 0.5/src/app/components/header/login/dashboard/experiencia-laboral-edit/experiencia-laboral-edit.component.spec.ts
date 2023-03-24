import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLaboralEditComponent } from './experiencia-laboral-edit.component';

describe('ExperienciaLaboralEditComponent', () => {
  let component: ExperienciaLaboralEditComponent;
  let fixture: ComponentFixture<ExperienciaLaboralEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLaboralEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaLaboralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
