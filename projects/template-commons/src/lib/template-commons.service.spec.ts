import { TestBed } from '@angular/core/testing';

import { TemplateCommonsService } from './template-commons.service';

describe('TemplateCommonsService', () => {
  let service: TemplateCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
