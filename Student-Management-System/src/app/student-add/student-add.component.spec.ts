import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddComponent } from './student-add.component';

describe('StudentAddComponent', () => {
  let component: StudentAddComponent;
  let fixture: ComponentFixture<StudentAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAddComponent]
    });
    fixture = TestBed.createComponent(StudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
