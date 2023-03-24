import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEditComponent } from './educacion-edit.component';

describe('EducacionEditComponent', () => {
  let component: EducacionEditComponent;
  let fixture: ComponentFixture<EducacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
