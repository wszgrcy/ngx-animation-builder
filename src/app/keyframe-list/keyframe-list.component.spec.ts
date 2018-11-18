import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeListComponent } from './keyframe-list.component';

describe('KeyframeListComponent', () => {
  let component: KeyframeListComponent;
  let fixture: ComponentFixture<KeyframeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyframeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
