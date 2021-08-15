import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfolioComponent } from './pfolio.component';

describe('PfolioComponent', () => {
  let component: PfolioComponent;
  let fixture: ComponentFixture<PfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
