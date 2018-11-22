import { Component, OnInit, Provider, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
import { combineLatest, filter } from 'rxjs/operators';
const TRIGGER_TRANSITION: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TriggerTransitionComponent),
  multi: true
}
@Component({
  selector: 'app-trigger-transition',
  templateUrl: './trigger-transition.component.html',
  styleUrls: ['./trigger-transition.component.scss', '../trigger-comm-style.scss'],
  providers: [TRIGGER_TRANSITION]
})
export class TriggerTransitionComponent implements OnInit, ControlValueAccessor {
  @Input() options;
  value;
  changeFn: Function = () => { };
  touchFn: Function = () => { };
  formGroup: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.options)
    this.formGroup = this.fb.group({
      keyframeRule: [''],
      stateChangeExpr: ['']
    })
    this.formGroup.valueChanges.
      pipe(
        filter((val) => val),
        filter((val: string[]) => Object.values(val).filter((val) => val).length == 2)
      ).
      subscribe((val) => {
        console.log('查看g', val)
        this.valueChange(val)
      })
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
  valueChange(value) {
    let template = `
    transition('${value.stateChangeExpr}', [
      useAnimation(${value.keyframeRule})
  ])
    `
    console.log(template)
    this.changeFn(template);
    this.touchFn(template)
  }
}
