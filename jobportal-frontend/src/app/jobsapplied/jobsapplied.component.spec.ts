import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsappliedComponent } from './jobsapplied.component';

describe('JobsappliedComponent', () => {
  let component: JobsappliedComponent;
  let fixture: ComponentFixture<JobsappliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsappliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsappliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
