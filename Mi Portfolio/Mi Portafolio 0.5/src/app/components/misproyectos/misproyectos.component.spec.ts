import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisproyectosComponent } from './misproyectos.component';

describe('MisproyectosComponent', () => {
  let component: MisproyectosComponent;
  let fixture: ComponentFixture<MisproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
