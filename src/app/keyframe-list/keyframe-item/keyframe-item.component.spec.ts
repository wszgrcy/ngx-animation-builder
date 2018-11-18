import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeItemComponent } from './keyframe-item.component';

describe('KeyframeItemComponent', () => {
  let component: KeyframeItemComponent;
  let fixture: ComponentFixture<KeyframeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyframeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
