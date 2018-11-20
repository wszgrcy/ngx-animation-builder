import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerTransitionComponent } from './trigger-transition.component';

describe('TriggerTransitionComponent', () => {
  let component: TriggerTransitionComponent;
  let fixture: ComponentFixture<TriggerTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
