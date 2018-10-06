import { TestBed, inject } from '@angular/core/testing';

import { WhatwedoService } from './whatwedo.service';

describe('WhatwedoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhatwedoService]
    });
  });

  it('should be created', inject([WhatwedoService], (service: WhatwedoService) => {
    expect(service).toBeTruthy();
  }));
});
