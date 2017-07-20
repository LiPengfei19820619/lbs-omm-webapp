import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-adjnodes',
  templateUrl: './adjnodes.component.html',
  styleUrls: ['./adjnodes.component.css']
})
export class AdjnodesComponent{
  displayedColumns = ['id', 'ipaddr', 'ipver', 'port', 'hostname', 'domain', 'type'];
  exampleDatabase : ExampleHttpDatabase | null;
  dataSource: ExampleDataSource | null;

  constructor(http: Http) {
    this.exampleDatabase = new ExampleHttpDatabase(http);
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }
}


export interface AdjacentNode {
  id: string;
  ipaddr: string;
  ipver: string;
  port: string;
  hostname: string;
  domain: string;
  type: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  private issuesUrl = './nodes.json';  // URL to web API
  
    getRepoIssues(): Observable<AdjacentNode[]> {
      return this.http.get(this.issuesUrl)
                      .map(this.extractData)
    }
    
    extractData(result: Response): AdjacentNode[] {
      return result.json().map(node => {
        return {
          id: node.id,
          ipaddr: node.state,
          ipver: node.title,
          port: node.port,
          hostname: node.hostname,
          domain: node.domain,
          type: node.type,
        }
      });
    }
    
    constructor(private http: Http) {}
}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class ExampleDataSource extends DataSource<AdjacentNode> {
  constructor(private _exampleDatabase: ExampleHttpDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<AdjacentNode[]> {
    return this._exampleDatabase.getRepoIssues();
  }

  disconnect() {}
}
