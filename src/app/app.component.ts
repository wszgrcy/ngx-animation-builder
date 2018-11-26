import { Component } from '@angular/core';
import {  SelectedFile } from './decorator/file';
import { Css2TsService, CssType } from './cssformater/css';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup, ValidatorFn, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Css2TsService]
})
export class AppComponent {

  ngAnimation = {
    url: null,
    fileName: ''
  }

  isLinear = false;
  /**导入css */
  css2TsFormGroup: FormGroup

  // css2Ts: Css2TsService = null
  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    public css2Ts: Css2TsService
  ) {

  }
  ngOnInit(): void {
    this.css2TsFormGroup = this.fb.group({
      file: [null],
      content: [''],
      complete: ['', [validateBeTrue()]]
    }, { validator: [validateOneOf()] });
    console.log(this.css2TsFormGroup)

    // this.secondFormGroup = this.fb.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }


  @SelectedFile()
  selectFile(files: FileList) {
    this.css2TsFormGroup.patchValue({ complete: 'PENDING' })
    let file = files[0]
    // console.log(file)
    // this.css2Ts = new Css2TsService({ file: file })
    this.css2Ts.setFile(file)
    this.css2Ts.init().then((obj) => {
      // console.warn(obj.tsRaw)
      // this.ngAnimation.url = this.sanitizer.bypassSecurityTrustUrl(
      //   URL.createObjectURL(obj.tsFile)
      // )
      // this.ngAnimation.fileName = `${file.name}.ts`;
      this.css2TsFormGroup.patchValue({ complete: true })
    })
  }

  generateFile() {
    console.log('准备生成文件')
    this.css2Ts.update()
    this.ngAnimation.url = this.sanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(this.css2Ts.tsFile)
    )
    this.ngAnimation.fileName = `${this.css2Ts.tsFile.name}.ts`;
    // this.css2TsFormGroup.patchValue({ complete: true })
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