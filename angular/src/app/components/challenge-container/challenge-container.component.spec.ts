import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeContainerComponent } from './challenge-container.component';

describe('ChallengeContainerComponent', () => {
  let component: ChallengeContainerComponent;
  let fixture: ComponentFixture<ChallengeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeContainerComponent]
    });
    fixture = TestBed.createComponent(ChallengeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
