import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ShowcaseItem } from 'src/app/data/showcase-item';


@Injectable({
  providedIn: 'root'
})
export class ShowcasesService {

  public showCasesSubject:Subject<ShowcaseItem[]>=new Subject<ShowcaseItem[]>();
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient:HttpClient) { }


  public getAllShowCases()
  {

    let data;
    this.httpClient.get(this.SERVER_URL + 'showcases').subscribe(response=>
    {
      data=response;
      this.showCasesSubject.next(data);
    })

  }
}
