import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { KeyframeListModule } from './keyframe-list/keyframe-list.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { InputModule } from './component/input.module';
import { TriggerModule } from './component/trigger/trigger.module';
import { createCustomElement } from "@angular/elements";
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    KeyframeListModule,
    FlexLayoutModule,
    InputModule,
    TriggerModule
  ],
  providers: [],
  //doc 采用正常启动方式
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  //doc 构造时注册一个自定义元素,
  constructor(injector: Injector) {
    let customElement = createCustomElement(AppComponent, { injector })
    customElements.define('custom-root', customElement);

  }
  //doc 启动时创建一个自定义元素元素
  ngDoBootstrap() {
    if (environment.display) {
      let a = document.createElement('custom-root')
      document.body.appendChild(a)

    }
  }
}
