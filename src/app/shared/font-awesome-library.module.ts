import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary,  FaConfig  } from '@fortawesome/angular-fontawesome';
import { faLinkedin , faTwitter , faInstagram , faFacebook , faFreeCodeCamp} from "@fortawesome/free-brands-svg-icons";
import {faUserCircle, faBell, faWrench , faSearch, faFilter} from "@fortawesome/free-solid-svg-icons"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontAwesomeLibraryModule { 
  constructor(library: FaIconLibrary, faConfig: FaConfig){
    faConfig.defaultPrefix = "fab";
    library.addIcons(faLinkedin,faTwitter,faInstagram,faFacebook,faFreeCodeCamp, faUserCircle,faBell,faWrench,faSearch,faFilter);
  }
}
