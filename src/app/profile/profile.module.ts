import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { RouterModule } from "@angular/router";
import { routes } from "./profile.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './user-profile/header/header.component';
import { SidenavComponent } from './user-profile/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeLibraryModule } from '../shared/font-awesome-library.module';

@NgModule({
  declarations: [UserProfileComponent, HeaderComponent, SidenavComponent],
  // TODO: Choose whether to add SharedModule or FlexLayoutModule
  imports: [CommonModule, FlexLayoutModule, RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProfileModule {}
