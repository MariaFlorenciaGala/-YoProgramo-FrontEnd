import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEditComponent } from './contacto-edit.component';

describe('ContactoEditComponent', () => {
  let component: ContactoEditComponent;
  let fixture: ComponentFixture<ContactoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
