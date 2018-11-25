import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, Provider, forwardRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Css2TsService } from '../../cssformater/css';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { TriggerStateComponent } from './trigger-state/trigger-state.component';
const TRIGGER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TriggerComponent),
  multi: true
}
@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss'],
  providers: [TRIGGER]
})
export class TriggerComponent implements OnInit, ControlValueAccessor {
  @ViewChild('triggerContainer', { read: ViewContainerRef }) triggerContainer: ViewContainerRef;
  @ViewChild('triggerState') triggerState: TemplateRef<any>
  @ViewChild('triggerTransition') triggerTransition: TemplateRef<any>;
  @Output() delete: EventEmitter<void> = new EventEmitter()
  selectedType: number;
  definitionOptions = [
    { label: '状态类', value: 1 },
    { label: '过度类', value: 2 },
  ];
  value = []
  formGroup: FormGroup
  changeFn: Function = () => { };
  touchFn: Function = () => { };
  constructor(
    public css2Ts: Css2TsService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [''],
      name: [''],
      value: this.fb.array([]),
      selectedType: [null]
    })
    this.formGroup.valueChanges.subscribe((val) => {
      this.valueChange()
    })
  }
  addTrigger() {
    console.log('准备添加', this.selectedType)
    // this.css2Ts.triggerList.push(null);
    this.value.push(null)
    console.log(this.formGroup.controls.value)
      ; (<FormArray>this.formGroup.controls.value).push(this.fb.control(null))
    console.log(this.formGroup)
    switch (this.formGroup.value.selectedType) {
      case 1:
        this.triggerContainer.createEmbeddedView(this.triggerState, { $implicit: this.css2Ts.keyframeObject, index: this.value.length - 1 })
        // this.triggerContainer.createComponent(TriggerStateComponent,undefined,)
        break;
      case 2:
        this.triggerContainer.createEmbeddedView(this.triggerTransition, { $implicit: this.css2Ts.keyframeObject, index: this.value.length - 1 })
        break;

      default:
        break;
    }
    this.cd.detectChanges()

  }
  writeValue(value: any) {
    if (value === undefined || value === null) return;
    console.log(value);
    // this.formGroup.patchValue({ id: value.id })
    this.formGroup.patchValue(value)
    // this.value = value;
  }
  registerOnChange(fn: Function) {
    this.changeFn = fn
  }
  registerOnTouched(fn: Function) {
    this.touchFn = fn
  }
  valueChange() {
    if (!this.formGroup.value.id) return;
    let value = this.formGroup.value
    console.log('发送', value)
    this.changeFn(value);
    this.touchFn(value)
  }
}
