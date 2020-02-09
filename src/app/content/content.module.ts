import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcasesComponent } from './showcases/showcases.component';
import { LikedShowcasesComponent } from './liked-showcases/liked-showcases.component';
import { RouterModule } from '@angular/router';
import { routes } from './content.routing';





@NgModule({
  declarations: [ShowcasesComponent, LikedShowcasesComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ContentModule { }
