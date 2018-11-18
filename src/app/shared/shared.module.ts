import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortNumberPipe } from './sort-number.pipe';
const pipeList = [SortNumberPipe]
@NgModule({
    declarations: [...pipeList],
    imports: [CommonModule],
    exports: [...pipeList],
    providers: [],
})
export class SharedModule { }