import { ShowcasesService } from './../../services/showcases/showcases.service';
import { ShowcaseItem } from './../../data/showcase-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.scss']
})
export class ShowcasesComponent implements OnInit {

  constructor(private showcasesService:ShowcasesService) {
    console.log('ShowcasesComponent constructor');
    showcasesService.showCasesSubject.subscribe(data=>
      {
        this.showcaseItems=data;
      });



   }

  public showcaseItems:ShowcaseItem[];
  ngOnInit(): void {
    this.showcasesService.getAllShowCases();
  }

}
