import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnedComponent } from './pawned.component';

describe('PawnedComponent', () => {
  let component: PawnedComponent;
  let fixture: ComponentFixture<PawnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawnedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
