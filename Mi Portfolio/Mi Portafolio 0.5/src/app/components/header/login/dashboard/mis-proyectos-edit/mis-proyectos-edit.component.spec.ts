import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProyectosEditComponent } from './mis-proyectos-edit.component';

describe('MisProyectosEditComponent', () => {
  let component: MisProyectosEditComponent;
  let fixture: ComponentFixture<MisProyectosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisProyectosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisProyectosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
