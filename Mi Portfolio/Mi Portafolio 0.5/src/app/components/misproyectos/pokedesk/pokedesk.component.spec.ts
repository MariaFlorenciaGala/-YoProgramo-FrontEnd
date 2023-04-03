import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedeskComponent } from './pokedesk.component';

describe('PokedeskComponent', () => {
  let component: PokedeskComponent;
  let fixture: ComponentFixture<PokedeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
