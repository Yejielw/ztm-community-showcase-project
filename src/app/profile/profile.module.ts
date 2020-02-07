
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { routes } from './profile.routing';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
