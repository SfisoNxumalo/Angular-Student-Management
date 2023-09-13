import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentComponent } from './search-student.component';

describe('SearchStudentComponent', () => {
  let component: SearchStudentComponent;
  let fixture: ComponentFixture<SearchStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStudentComponent]
    });
    fixture = TestBed.createComponent(SearchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
