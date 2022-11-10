import { TestBed } from '@angular/core/testing';

import { AllStudentsDataService } from './all-students-data.service';

describe('AllStudentsDataService', () => {
  let service: AllStudentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllStudentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
