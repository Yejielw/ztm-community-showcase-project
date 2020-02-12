import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryShowcasesService implements InMemoryDbService {
  createDb()
  {

    let showcases = [
      { id: 1, Title: 'Windstorm',Subtitle:"Windstorm1",Summary:"Summary of Windstorm",Description:"Description of Windstorm" },
      { id: 2, Title: 'Bombasto',Subtitle:"Bombasto1",Summary:"Summary of Bombasto",Description:"Description of Bombasto" },
      { id: 3, Title: 'Magneta' ,Subtitle:"Magneta1",Summary:"Summary of Magneta",Description:"Description of Magneta" },
      { id: 4, Title: 'Tornado',Subtitle:"Tornado1",Summary:"Summary of Tornado",Description:"Description of Tornado"  }
    ];
    return {showcases};
  }
  constructor() { }


}
