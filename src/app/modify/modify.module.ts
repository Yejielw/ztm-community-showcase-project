import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShowcaseComponent } from './add-showcase/add-showcase.component';
import { EditShowcaseComponent } from './edit-showcase/edit-showcase.component';
import { RouterModule } from '@angular/router';
import { routes } from './modify.routing';



@NgModule({
  declarations: [AddShowcaseComponent, EditShowcaseComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ModifyModule { }
