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


  constructor(private httpClient: HttpClient) {
  }


  getAllShowCases(): Observable<ShowcaseItem[]> {
    return this.httpClient.get<ShowcaseItem[]>(this.SERVER_URL).pipe(
      tap(data => console.log(data)),
      catchError(err => {
        return throwError(err);
      }))
  }



}
