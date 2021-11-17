import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleScoreComponent } from './single-score.component';

describe('SingleScoreComponent', () => {
  let component: SingleScoreComponent;
  let fixture: ComponentFixture<SingleScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
