import { TestBed, inject } from '@angular/core/testing';

import { LibroRESTResourceService } from './libro-restresource.service';

describe('LibroRESTResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibroRESTResourceService]
    });
  });

  it('should be created', inject([LibroRESTResourceService], (service: LibroRESTResourceService) => {
    expect(service).toBeTruthy();
  }));
});
