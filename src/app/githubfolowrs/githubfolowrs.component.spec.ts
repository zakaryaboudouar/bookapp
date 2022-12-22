import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfolowrsComponent } from './githubfolowrs.component';

describe('GithubfolowrsComponent', () => {
  let component: GithubfolowrsComponent;
  let fixture: ComponentFixture<GithubfolowrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubfolowrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfolowrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
