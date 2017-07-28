import { Component, OnInit } from '@angular/core';

import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import { Nodegroup } from './nodegroup';
import { NodegroupService } from './nodegroup.service';

@Component({
  selector: 'app-nodegroups',
  templateUrl: './nodegroups.component.html',
  styleUrls: ['./nodegroups.component.css']
})
export class NodegroupsComponent implements OnInit {
  displayedColumns = ['operation', 'id', 'type', 'name'];
  
  dataSource: NodegroupDataSource | null;

  constructor(private nodegroupService: NodegroupService) {
    this.dataSource = new NodegroupDataSource(nodegroupService);
  }

  ngOnInit() {
  }

}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class NodegroupDataSource extends DataSource<Nodegroup> {
  constructor(private _nodegroupService: NodegroupService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Nodegroup[]> {
    return this._nodegroupService.getNodegroups();
  }

  disconnect() {}
}
