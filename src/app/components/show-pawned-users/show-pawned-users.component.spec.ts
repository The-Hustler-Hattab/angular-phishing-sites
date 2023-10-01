import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPawnedUsersComponent } from './show-pawned-users.component';

describe('ShowPawnedUsersComponent', () => {
  let component: ShowPawnedUsersComponent;
  let fixture: ComponentFixture<ShowPawnedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPawnedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPawnedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
