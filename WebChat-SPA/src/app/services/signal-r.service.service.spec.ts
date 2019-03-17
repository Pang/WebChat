import { TestBed } from '@angular/core/testing';

import { SignalRService } from './signal-r.service';

describe('SignalR.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignalRService = TestBed.get(SignalRService);
    expect(service).toBeTruthy();
  });
});
