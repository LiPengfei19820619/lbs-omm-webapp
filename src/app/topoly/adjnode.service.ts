import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Adjnode } from './Adjnode';

@Injectable()
export class AdjnodeService {
  private adjnodesUrl = 'http://localhost:8080/v1/adjnodes';  // URL to web api

  constructor(private http: Http) { }

  getAdjnodes(): Observable<Adjnode[]> {
    return this.http.get(this.adjnodesUrl)
                    .map(this.extractData)
  }

  extractData(result: Response): Adjnode[] {
    return result.json().map(node => {
      return {
        id: node.id,
        ipaddr: node.ipaddr,
        ipver: node.ipver,
        port: node.port,
        hostname: node.hostname,
        domain: node.domain,
        type: node.type,
      }
    });
  }
}
