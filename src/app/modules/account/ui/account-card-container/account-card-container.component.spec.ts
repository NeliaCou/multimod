import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardContainerComponent } from './account-card-container.component';

describe('AccountCardContainerComponent', () => {
  let component: AccountCardContainerComponent;
  let fixture: ComponentFixture<AccountCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
