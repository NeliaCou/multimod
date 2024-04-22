import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMugComponent } from './add-mug.component';

describe('AddMugComponent', () => {
  let component: AddMugComponent;
  let fixture: ComponentFixture<AddMugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
