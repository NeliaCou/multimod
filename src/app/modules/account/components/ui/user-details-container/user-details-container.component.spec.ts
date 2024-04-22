import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsContainerComponent } from './user-details-container.component';

describe('UserDetailsContainerComponent', () => {
  let component: UserDetailsContainerComponent;
  let fixture: ComponentFixture<UserDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
