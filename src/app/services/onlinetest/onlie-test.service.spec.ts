import { TestBed, inject } from '@angular/core/testing';

import { OnlieTestService } from './onlie-test.service';

describe('OnlieTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlieTestService]
    });
  });

  it('should be created', inject([OnlieTestService], (service: OnlieTestService) => {
    expect(service).toBeTruthy();
  }));
});
