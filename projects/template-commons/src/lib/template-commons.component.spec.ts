import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCommonsComponent } from './template-commons.component';

describe('TemplateCommonsComponent', () => {
  let component: TemplateCommonsComponent;
  let fixture: ComponentFixture<TemplateCommonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCommonsComponent]
    });
    fixture = TestBed.createComponent(TemplateCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
