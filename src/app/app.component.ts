import { Component } from '@angular/core';
// import  "../../src/assets/src/loader"
// declare const CSSOM;
// declare const cssom;
import * as CSSOM from "cssom";
import { FileParam, required, SelectedFile } from './decorator/file';
import { cssFilter, cssMerge, tsHeader, Css2Ts } from './cssformater/css';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup, ValidatorFn, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngAnimation = {
    url: null,
    fileName: ''
  }

  isLinear = false;
  secondFormGroup: FormGroup;
  /**导入css */
  css2TsFormGroup: FormGroup


  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.css2TsFormGroup = this.fb.group({
      file: [null],
      content: [''],
      complete: ['', [validateBeTrue()]]
    }, { validator: [validateOneOf()] });
    console.log(this.css2TsFormGroup)

    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }


  @SelectedFile()
  selectFile(files: FileList) {
    this.css2TsFormGroup.patchValue({ complete: 'PENDING' })
    let file = files[0]
    // console.log(file)
    let css2Ts = new Css2Ts({ file: file })
    css2Ts.init().then((obj) => {
      // console.warn(obj.tsRaw)
      this.ngAnimation.url = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(obj.tsFile)
      )
      this.ngAnimation.fileName = `${file.name}.ts`;
      this.css2TsFormGroup.patchValue({ complete: true })
    })
    // let fileReader = new FileReader()
    // fileReader.readAsText(file)
    // fileReader.onload = (res: ProgressEvent) => {
    //   // console.log('查看结果', fileReader.result);
    //   let result = CSSOM.parse(fileReader.result)
    //   // console.log(result)
    //   // console.log()
    //   let array = cssFilter(result.cssRules)
    //   let a = new File([tsHeader(cssMerge(array).join(''))], 'ng-animate.ts', { type: 'text/plain;charset=utf-8' })
    //   this.ngAnimation.url = this.sanitizer.bypassSecurityTrustUrl(
    //     URL.createObjectURL(a)
    //   )
    //   this.ngAnimation.fileName = `${file.name}.ts`
    // }
  }



}
function validateOneOf(): ValidatorFn {
  console.log('我被初始化')
  return (g: FormGroup) => {
    console.log('查看', g)
    if (!g.value.file && !g.value.content) {
      return { css: '没有选择css' }
    }
  }
}
function validateBeTrue() {
  return (c: FormControl) => {
    if (!c.value) {
      return { complete: '没有开始处理' }
    } else if (c.value == 'PENDING') {
      return { complete: '正在处理' }
    }
  }
}