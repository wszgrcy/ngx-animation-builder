import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerStateComponent } from './trigger-state.component';

describe('TriggerStateComponent', () => {
  let component: TriggerStateComponent;
  let fixture: ComponentFixture<TriggerStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
