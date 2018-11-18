import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Provider, forwardRef, Input, NgZone } from '@angular/core';
import { take } from 'rxjs/operators';
const INPUT_LIST: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputListComponent),
  multi: true
}
@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss'],
  providers: [INPUT_LIST]
})
export class InputListComponent implements OnInit, ControlValueAccessor {
  /**分隔符,根据这个来确定是分割还是原样赋值(要保证赋值是数组) */
  @Input() separator: string
  changeFn: Function = () => { };
  touchFn: Function = () => { };
  value: string[] = [];
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }
  addItem() {
    this.value.push(null);
    // console.log(this.value)
  }
  writeValue(value: string[] | string) {
    if (value === undefined || value === null) return;
    if (this.separator) this.value = (<string>value).split(this.separator)
    else this.value = <string[]>value;
    // console.log(this.value)
  }

  registerOnChange(fn: Function) {
    this.changeFn = fn
  }

  registerOnTouched(fn: Function) {
    this.touchFn = fn
  }

  valueChange(i, item) {
    // setTimeout(() => {

    // }, 0);
    // // this.value[i] = item
    let value: string | string[] = this.value
    if (this.separator)
      value = this.value.join(this.separator)
    this.changeFn(value);
    this.touchFn(value)

  }
  trackByFn(index: number, item: any) {
    return index
  }
}
