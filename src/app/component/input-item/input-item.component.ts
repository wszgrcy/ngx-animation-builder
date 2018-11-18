import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, NgZone, Provider, forwardRef } from '@angular/core';
import { take } from "rxjs/operators";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const INPUT_ITEM: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputItemComponent),
  multi: true
}
@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [INPUT_ITEM]
})
export class InputItemComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  @ViewChild('readEle') readEle: ElementRef<HTMLSpanElement>
  changeFn: Function = () => { };
  touchFn: Function = () => { };
  value = '';
  flag = {
    readModel: true,
    disabled: false
  }
  constructor(
    private cd: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }
  changeStatus(bool?: boolean) {
    if (this.flag.disabled) return
    let width = this.readEle.nativeElement.offsetWidth
    if (width) {
      this.input.nativeElement.style.width = `${width}px`
    }
    if (bool !== undefined)
      this.flag.readModel = bool

    if (!this.flag.readModel) {
      this.zone.onStable.pipe(take(1)).subscribe(() => {
        this.input.nativeElement.focus()
      })
    }
    this.cd.detectChanges()
  }

  writeValue(value: string) {
    if (value === undefined) return;
    this.value = value;
    this.cd.detectChanges()
  }
  registerOnChange(fn: Function) {
    this.changeFn = fn
  }
  registerOnTouched(fn: Function) {
    this.touchFn = fn
  }
  valueChange() {
    console.log('值变更item', this.value)
    this.changeFn(this.value);
    this.touchFn(this.value)
  }
  setDisabledState(isDisabled: boolean) {
    this.flag.disabled = isDisabled
  }
}
