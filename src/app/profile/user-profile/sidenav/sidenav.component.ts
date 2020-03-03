import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  {


  tabs = [
    {
      iconFamily:"fas",
      icon:"user-circle",
      text: "Profile"
    },
    {
      iconFamily:"fas",
      icon:"bell",
      text:"Notifications"
    },
    {
      iconFamily:"fas",
      icon:"wrench",
      text:"Settings"
    }
  ]




}
