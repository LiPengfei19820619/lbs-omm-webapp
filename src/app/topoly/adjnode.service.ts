import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Adjnode } from './Adjnode';

@Injectable()
export class AdjnodeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private adjnodesUrl = 'http://localhost:9090/api/v1/adjnodes';  // URL to web api

  constructor(private http: Http) { }

  getAdjnodes(): Observable<Adjnode[]> {
    return this.http.get(this.adjnodesUrl)
                    .map(this.extractData);
  }

  getAdjnode(id: number): Observable<Adjnode> {
    const url = `${this.adjnodesUrl}/${id}`;

    return this.http.get(url)
                    .map(res => res.json());
  }

  create(node: Adjnode): Observable<Adjnode> {
    console.log("adjnode.service:create");
    return this.http
        .post(this.adjnodesUrl, JSON.stringify(node), {headers: this.headers})
        .map(res => res.json());
  }

  delete(id: number): Observable<void> {
    const url = `${this.adjnodesUrl}/${id}`;
    console.log("adjnode.service:delete " + url);
    return this.http.delete(url, {headers: this.headers}).map(res => null);
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
