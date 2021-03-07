import { TestBed } from '@angular/core/testing';

import { AskYTService } from './ask-yt.service';

describe('AskYTService', () => {
  let service: AskYTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskYTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
