import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcasesComponent } from './showcases/showcases.component';
import { LikedShowcasesComponent } from './liked-showcases/liked-showcases.component';
import { RouterModule } from '@angular/router';
import { routes } from './content.routing';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [ShowcasesComponent, LikedShowcasesComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class ContentModule { }
