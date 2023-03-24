import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeMiEditComponent } from './acerca-de-mi-edit.component';

describe('AcercaDeMiEditComponent', () => {
  let component: AcercaDeMiEditComponent;
  let fixture: ComponentFixture<AcercaDeMiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeMiEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeMiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
