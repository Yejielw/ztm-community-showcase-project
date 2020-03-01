import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeLibraryModule } from './font-awesome-library.module';



@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    CommonModule,
  ],
  exports: [
    FlexLayoutModule,
    CommonModule,
    FontAwesomeLibraryModule

  ]
})
export class SharedModule { }
