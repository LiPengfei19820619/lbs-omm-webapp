import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { SecurityctrlProperty } from './securityctrl-property';
import { OperationResult } from '../app-operation-result';

@Injectable()
export class SecurityctrlPropertyService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:9090/api/v1/securityctrlproperty';  // URL to web api

  constructor(private http: Http) { }

  getSecurityctrlProperty(): Observable<SecurityctrlProperty[]> {
    return this.http.get(this.url)
                    .map(this.extractData);
  }

  create(property: SecurityctrlProperty): Observable<OperationResult> {
    console.log("securytictrl-property.service:create");
    return this.http
        .post(this.url, JSON.stringify(property), {headers: this.headers})
        .map(res => res.json());
  }

  update(property: SecurityctrlProperty): Observable<OperationResult> {
    console.log("securytictrl-property.service:create");
    return this.http
        .put(this.url, JSON.stringify(property), {headers: this.headers})
        .map(res => res.json());
  }

  extractData(result: Response): SecurityctrlProperty[] {
    let property: SecurityctrlProperty[] = [result.json()];
    return property;
    /* return result.json().map(property => {
      return {
        ipaddr: property.ipaddr,
        ipver: property.ipver,
        port: property.port,
        hostname: property.hostname,
        domain: property.domain,
        nodegroupid: property.nodegroupid
      }
    }); */
  }
}
