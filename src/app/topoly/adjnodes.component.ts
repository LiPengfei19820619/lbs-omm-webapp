import { Component } from '@angular/core';

import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import { Adjnode } from './adjnode';
import { AdjnodeService } from './adjnode.service';

@Component({
  selector: 'app-adjnodes',
  templateUrl: './adjnodes.component.html',
  styleUrls: ['./adjnodes.component.css']
})
export class AdjnodesComponent{
  displayedColumns = ['id', 'ipaddr', 'ipver', 'port', 'hostname', 'domain', 'type'];
  
  dataSource: AdjnodeDataSource | null;

  constructor(adjnodeService: AdjnodeService) {
    this.dataSource = new AdjnodeDataSource(adjnodeService);
  }

  rowClicked(row: Adjnode){
    alert("clicked:" + row.id)
  }
}


/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class AdjnodeDataSource extends DataSource<Adjnode> {
  constructor(private _adjnodeService: AdjnodeService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Adjnode[]> {
    return this._adjnodeService.getAdjnodes();
  }

  disconnect() {}
}
