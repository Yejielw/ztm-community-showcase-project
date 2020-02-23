
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { routes } from './profile.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProfileModule { }
