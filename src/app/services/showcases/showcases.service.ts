import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, EMPTY, throwError, Observable } from 'rxjs';
import { ShowcaseItem } from 'src/app/data/showcase-item';
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShowcasesService {

  SERVER_URL: string = "api/showcases";
  private showcasesSource = new BehaviorSubject([]);
  showcases$ = this.showcasesSource.asObservable();


  constructor(private httpClient: HttpClient) {
  }

  private setShowcases(data){
    return this.showcasesSource.next(data);
  }



  getAllShowCases(): Observable<ShowcaseItem[]> {
    return this.httpClient.get<ShowcaseItem[]>(this.SERVER_URL).pipe(
      tap(data => this.setShowcases(data)),
      catchError(err => {
        return throwError(err);
      }))
  }



}
