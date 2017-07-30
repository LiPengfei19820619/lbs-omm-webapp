import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Groupnode } from './Groupnode';
import { OperationResult } from '../../app-operation-result';

@Injectable()
export class GroupnodeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private groupnodesUrl = 'http://localhost:9090/api/v1/groupnodes';  // URL to web api

  constructor(private http: Http) { }

  getGroupnodes(): Observable<Groupnode[]> {
    return this.http.get(this.groupnodesUrl)
                    .map(this.extractData);
  }

  getGroupnode(id: number): Observable<Groupnode> {
    const url = `${this.groupnodesUrl}/${id}`;

    return this.http.get(url)
                    .map(res => res.json());
  }

  create(node: Groupnode): Observable<OperationResult> {
    console.log("groupnode.service:create");
    return this.http
        .post(this.groupnodesUrl, JSON.stringify(node), {headers: this.headers})
        .map(res => res.json());
  }

  update(node: Groupnode): Observable<OperationResult> {
    console.log("adjnode.service:create");
    return this.http
        .put(this.groupnodesUrl, JSON.stringify(node), {headers: this.headers})
        .map(res => res.json());
  }

  delete(id: number, nodeid: number): Observable<OperationResult> {
    const url = `${this.groupnodesUrl}/${id}/node/${nodeid}`;
    console.log("adjnode.service:delete " + url);
    return this.http.delete(url, {headers: this.headers}).map(res => null);
  }

  extractData(result: Response): Groupnode[] {
    return result.json().map(groupnode => {
      return {
        id: groupnode.id,
        type: groupnode.type,
        name: groupnode.name
      }
    });
  }

}
