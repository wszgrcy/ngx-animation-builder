import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { KeyframeListComponent } from './keyframe-list/keyframe-list.component';
import { KeyframeItemComponent } from './keyframe-list/keyframe-item/keyframe-item.component';
import { KeyframeListModule } from './keyframe-list/keyframe-list.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { InputListComponent } from './component/input-list/input-list.component';
import { InputModule } from './component/input.module';
import { TriggerModule } from './component/trigger/trigger.module';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
