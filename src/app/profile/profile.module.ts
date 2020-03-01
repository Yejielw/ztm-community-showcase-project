import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { RouterModule } from "@angular/router";
import { routes } from "./profile.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './user-profile/header/header.component';
import { SidenavComponent } from './user-profile/sidenav/sidenav.component';

@NgModule({
  declarations: [UserProfileComponent, HeaderComponent, SidenavComponent],
  // TODO: Choose whether to add SharedModule or FlexLayoutModule
  imports: [CommonModule, FlexLayoutModule, RouterModule.forChild(routes)]
})
export class ProfileModule {}
