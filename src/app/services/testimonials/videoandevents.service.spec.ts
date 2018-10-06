import { TestBed, inject } from '@angular/core/testing';

import { VideoandeventsService } from './videoandevents.service';

describe('VideoandeventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoandeventsService]
    });
  });

  it('should be created', inject([VideoandeventsService], (service: VideoandeventsService) => {
    expect(service).toBeTruthy();
  }));
});
