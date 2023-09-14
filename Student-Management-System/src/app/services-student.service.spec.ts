import { TestBed } from '@angular/core/testing';

import { ServicesStudentService } from './services-student.service';

describe('ServicesStudentService', () => {
  let service: ServicesStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
