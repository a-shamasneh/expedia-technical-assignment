import { TestBed, inject } from '@angular/core/testing';

import { GetexpediaService } from './getexpedia.service';

describe('GetexpediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetexpediaService]
    });
  });

  it('should ...', inject([GetexpediaService], (service: GetexpediaService) => {
    expect(service).toBeTruthy();
  }));
});
