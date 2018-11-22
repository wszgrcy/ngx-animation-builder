import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TriggerComponent } from './trigger.component';
import { MatIconModule } from '@angular/material/icon';
import { TriggerStateComponent } from './trigger-state/trigger-state.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TriggerTransitionComponent } from './trigger-transition/trigger-transition.component';
import { TriggerListComponent } from '../trigger-list/trigger-list.component';

@NgModule({
    declarations: [TriggerComponent, TriggerStateComponent, TriggerTransitionComponent,
        TriggerListComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [TriggerComponent,TriggerListComponent],
    providers: [],
})
export class TriggerModule { }