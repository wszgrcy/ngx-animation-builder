import { Component, OnInit, Input, Provider, forwardRef, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { tap, startWith, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { keyframes } from '@angular/animations';
const TRIGGER_STATE: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TriggerStateComponent),
  multi: true
}
@Component({
  selector: 'app-trigger-state',
  templateUrl: './trigger-state.component.html',
  styleUrls: ['./trigger-state.component.scss', '../trigger-comm-style.scss'],
  providers: [TRIGGER_STATE]
})
export class TriggerStateComponent implements OnInit, ControlValueAccessor {
  @Input('options') orgOptions: any[];
  keyframeOptions: any[] = []
  keyframesOptions: Observable<any>
  changeFn: Function = () => { };
  touchFn: Function = () => { };
  value;
  formGroup: FormGroup
  constructor(private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.formGroup = this.fb.group({
      keyframeRule: [''],
      cssStr: [''],
      stateName: [''],
      keyframeList: []
    })
    console.log(this.formGroup);
    this.keyframesOptions = (<FormControl>this.formGroup.controls.keyframeRule).valueChanges.pipe(
      startWith(''),
      // tap((val) => { console.log('查看值', val) }),
      map((val) => this.filterKeyframesOptions(this.orgOptions, val))
    );

    //doc 输入时找是不是有这个关键帧
    ; (<FormControl>this.formGroup.controls.keyframeRule).valueChanges.subscribe((res) => {
      if (this.orgOptions[res]) this.keyframeOptions = this.orgOptions[res]
      console.log(this.keyframeOptions)
    })
      //doc 补丁
      ; (<FormControl>this.formGroup.controls.cssStr).valueChanges.subscribe((val) => {
        (<FormControl>this.formGroup.controls.cssStr).patchValue(val, { emitEvent: false })
        this.valueChange(val)
      })
    this.formGroup.controls.keyframeRule.valueChanges.
      pipe(startWith('')).
      subscribe((val) => {
        !val ? this.formGroup.controls.keyframeList.disable() : this.formGroup.controls.keyframeList.enable()

      })
    this.formGroup.controls.keyframeList.valueChanges.pipe(
      filter((val) => val),
    ).
      subscribe((val: string[]) => {
        this.formGroup.patchValue({ cssStr: val.filter((val) => !/offset/.test(val)).join(',') })
      })
  }
  keyframesSelected() {

  }
  private filterKeyframesOptions(object, value: string) {
    let array = []
    for (const x in object) {
      if (!object.hasOwnProperty(x)) continue;
      if (x.indexOf(value) != -1 || value.trim() == '')
        array.push(x)
    }
    return array;
  }
  writeValue(value: string) {
    if (value === undefined) return;
    this.value = value;
  }
  registerOnChange(fn: Function) {
    this.changeFn = fn
  }
  registerOnTouched(fn: Function) {
    this.touchFn = fn
  }
  /**
   * @description 当值变更时发送信息
   * @author cyia
   * @date 2018-11-20
   * @param value
   * @memberof TriggerStateComponent
   */
  valueChange(value) {
    let template = `
    state('${this.formGroup.value.stateName}', style({
     ${this.formGroup.value.cssStr}
    }))
    `
    console.log('准备发射', template)
    this.changeFn(template);
    this.touchFn(template)
  }
  keyframeSelectChange() {

  }
}
