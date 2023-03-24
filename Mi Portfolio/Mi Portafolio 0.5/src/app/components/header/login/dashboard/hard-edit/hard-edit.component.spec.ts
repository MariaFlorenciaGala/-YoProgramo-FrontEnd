import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardEditComponent } from './hard-edit.component';

describe('HardEditComponent', () => {
  let component: HardEditComponent;
  let fixture: ComponentFixture<HardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
