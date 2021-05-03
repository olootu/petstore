import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngMaterialComponent } from './ang-material.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatDialogModule
  ],
  declarations: [AngMaterialComponent],
  exports: [
    MatDialogModule,
    MatSliderModule],
    providers: [ { provide: MAT_DIALOG_DATA, useValue: [] } ]
})
export class AngMaterialModule {}
