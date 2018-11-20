import { Component, OnInit, Input, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Css2TsService } from '../../cssformater/css';

const KEYFRAMEITEM_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KeyframeItemComponent),
  multi: true
}

@Component({
  selector: 'app-keyframe-item',
  templateUrl: './keyframe-item.component.html',
  styleUrls: ['./keyframe-item.component.scss'],
  providers: [KEYFRAMEITEM_ACCESSOR]
})
export class KeyframeItemComponent implements OnInit, ControlValueAccessor {
  // @Input() item;
  item
  changeFn: Function = () => { }
  touchFn: Function = () => { }
  constructor(private css2Ts: Css2TsService) { }

  ngOnInit() {
  }

  writeValue(value) {
    this.item = value
  }
  registerOnChange(fn: Function) {
    this.changeFn = fn
  }
  registerOnTouched(fn: Function) {
    this.touchFn = fn
  }
  valueChange(progress, key) {
    console.log(this.css2Ts.keyframeObject)
    console.log(progress, key)
    this.css2Ts.keyframeObject[key][progress.key]=progress.value
  }
}
