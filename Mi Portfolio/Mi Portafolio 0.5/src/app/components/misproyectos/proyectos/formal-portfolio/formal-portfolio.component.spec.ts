import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalPortfolioComponent } from './formal-portfolio.component';

describe('FormalPortfolioComponent', () => {
  let component: FormalPortfolioComponent;
  let fixture: ComponentFixture<FormalPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
