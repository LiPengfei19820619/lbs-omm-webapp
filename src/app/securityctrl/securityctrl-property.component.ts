import { Component, OnInit } from '@angular/core';

import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import { SecurityctrlProperty } from './securityctrl-property';
import { SecurityctrlPropertyService } from './securityctrl-property.service';

@Component({
  selector: 'app-securityctrl-property',
  templateUrl: './securityctrl-property.component.html',
  styleUrls: ['./securityctrl-property.component.css']
})
export class SecurityctrlPropertyComponent implements OnInit {
  displayedColumns = ['operation', 'ipaddr', 'ipver', 'port', 'hostname', 'domain', 'nodegroupid'];
  
  dataSource: SecurityctrlPropertyDataSource | null;

  constructor(private dataService: SecurityctrlPropertyService) {
    this.dataSource = new SecurityctrlPropertyDataSource(dataService);
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
export class SecurityctrlPropertyDataSource extends DataSource<SecurityctrlProperty> {
  constructor(private _dataService: SecurityctrlPropertyService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<SecurityctrlProperty[]> {
    return this._dataService.getSecurityctrlProperty();
  }

  disconnect() {}
}

