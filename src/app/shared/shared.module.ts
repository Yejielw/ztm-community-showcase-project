import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    FlexLayoutModule,
    CommonModule,
    BrowserAnimationsModule,

  ]
})
export class SharedModule { }
