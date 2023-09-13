import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditComponent } from './student-edit.component';

describe('StudentEditComponent', () => {
  let component: StudentEditComponent;
  let fixture: ComponentFixture<StudentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentEditComponent]
    });
    fixture = TestBed.createComponent(StudentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
