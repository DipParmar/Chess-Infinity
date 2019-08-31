import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { StarComponent } from '../shared/star/star.component';

import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, StarComponent, ConvertToSpacePipe, ReactiveFormsModule]
})
export class SharedModule { }
