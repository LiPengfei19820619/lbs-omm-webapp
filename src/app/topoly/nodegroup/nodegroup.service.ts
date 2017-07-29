import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Nodegroup } from './Nodegroup';
import { OperationResult } from '../../app-operation-result';

@Injectable()
export class NodegroupService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private nodegroupsUrl = 'http://localhost:9090/api/v1/nodegroups';  // URL to web api

  constructor(private http: Http) { }

  getNodegroups(): Observable<Nodegroup[]> {
    return this.http.get(this.nodegroupsUrl)
                    .map(this.extractData);
  }

  getNodegroup(id: number): Observable<Nodegroup> {
    const url = `${this.nodegroupsUrl}/${id}`;

    return this.http.get(url)
                    .map(res => res.json());
  }

  create(node: Nodegroup): Observable<OperationResult> {
    console.log("nodegroup.service:create");
    return this.http
        .post(this.nodegroupsUrl, JSON.stringify(node), {headers: this.headers})
        .map(res => res.json());
  }

  update(node: Nodegroup): Observable<OperationResult> {
    console.log("adjnode.service:create");
    return this.http
        .put(this.nodegroupsUrl, JSON.stringify(node), {headers: this.headers})
        .map(res => res.json());
  }

  delete(id: number): Observable<OperationResult> {
    const url = `${this.nodegroupsUrl}/${id}`;
    console.log("adjnode.service:delete " + url);
    return this.http.delete(url, {headers: this.headers}).map(res => null);
  }

  extractData(result: Response): Nodegroup[] {
    return result.json().map(nodegroup => {
      return {
        id: nodegroup.id,
        type: nodegroup.type,
        name: nodegroup.name
      }
    });
  }

}
