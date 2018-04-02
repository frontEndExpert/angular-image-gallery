import { TestBed, inject } from '@angular/core/testing';

import { ImageLocalStorageService } from './image-local-storage.service';

describe('ImageLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageLocalStorageService]
    });
  });

  it('should be created', inject([ImageLocalStorageService], (service: ImageLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
