import { TestBed } from '@angular/core/testing';

import { GithubfolowrsService } from './githubfolowrs.service';

describe('GithubfolowrsService', () => {
  let service: GithubfolowrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubfolowrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
