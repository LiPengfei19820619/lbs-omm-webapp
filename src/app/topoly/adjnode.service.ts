import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Adjnode } from './Adjnode';

@Injectable()
export class AdjnodeService {
  private adjnodesUrl = 'http://localhost:9090/api/v1/adjnodes';  // URL to web api

  constructor(private http: Http) { }

  getAdjnodes(): Promise<Adjnode[]> {
    return this.http.get(this.adjnodesUrl)
               .toPromise()
               .then(response => response.json().data as Adjnode[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
