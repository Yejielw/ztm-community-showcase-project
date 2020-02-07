import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  //TODO: add splash screen
  //TODO: add loading progress indicator
  constructor(private router: Router) { }

  ngOnInit(): void {
    //TODO: read user state and navigate to right route acording to user state
    // if first time in browser-> register
    // if already registered but not logged in-> login
    // if logged in -> showcases
    this.router.navigate(['/auth/login']);
  }

}
