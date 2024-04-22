import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMugComponent } from './get-mug.component';

describe('GetMugComponent', () => {
  let component: GetMugComponent;
  let fixture: ComponentFixture<GetMugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetMugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetMugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
