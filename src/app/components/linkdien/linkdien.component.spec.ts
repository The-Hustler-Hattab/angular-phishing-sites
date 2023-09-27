import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdienComponent } from './linkdien.component';

describe('LinkdienComponent', () => {
  let component: LinkdienComponent;
  let fixture: ComponentFixture<LinkdienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkdienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkdienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
