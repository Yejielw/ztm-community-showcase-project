import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  BehaviorSubject } from 'rxjs';
import { ShowcaseItem } from 'src/app/data/showcase-item';


@Injectable({
  providedIn: 'root'
})
export class ShowcasesService {

  public showCasesSubject:BehaviorSubject<ShowcaseItem[]>=new BehaviorSubject<ShowcaseItem[]>(null);
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient:HttpClient) {
    this.getAllShowCases()
  }


  private getAllShowCases()
  {

    let data;
    this.httpClient.get(this.SERVER_URL + 'showcases').subscribe(response=>
    {
      data=response;
      this.showCasesSubject.next(data);
      setTimeout(() => {
        this.getAllShowCases()
    }, 5000);
    })

  }
}
