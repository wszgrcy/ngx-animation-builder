import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { KeyframeListComponent } from './keyframe-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyframeItemComponent } from './keyframe-item/keyframe-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputModule } from '../component/input.module';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [KeyframeItemComponent, KeyframeListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    InputModule,
    CdkScrollableModule,
    ScrollingModule,
  ],
  exports: [KeyframeListComponent],
  providers: [],
})
export class KeyframeListModule {}
