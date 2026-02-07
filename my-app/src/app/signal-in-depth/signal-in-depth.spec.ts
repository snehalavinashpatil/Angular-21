import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInDepth } from './signal-in-depth';

describe('SignalInDepth', () => {
  let component: SignalInDepth;
  let fixture: ComponentFixture<SignalInDepth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInDepth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInDepth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
