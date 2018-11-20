import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputListComponent } from './input-list/input-list.component';
import { InputItemComponent } from './input-item/input-item.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [InputListComponent, InputItemComponent,],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [InputListComponent]
})
export class InputModule { }
