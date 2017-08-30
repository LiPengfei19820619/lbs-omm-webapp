import { Component, OnInit } from '@angular/core';

import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import { Groupnode } from './groupnode';
import { GroupnodeService } from './groupnode.service';

@Component({
  selector: 'app-groupnodes',
  templateUrl: './groupnodes.component.html',
  styleUrls: ['./groupnodes.component.css']
})
export class GroupnodesComponent implements OnInit {
  displayedColumns = ['operation', 'groupid', 'nodeid'];
  
  dataSource: GroupnodeDataSource | null;

  constructor(private groupnodeService: GroupnodeService) {
    this.dataSource = new GroupnodeDataSource(groupnodeService);
  }

  ngOnInit() {
  }

  deleteGroupnode(row: Groupnode){
    if (confirm("是否确认从此节点组" + row.groupid + "中删除节点: " + row.nodeid)) {
      this.groupnodeService.delete(row.groupid, row.nodeid)
      .subscribe(res => {
        alert("从节点组中删除节点成功");
      },
      err => alert(err.manage));
    }
  }
}


/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class GroupnodeDataSource extends DataSource<Groupnode> {
  constructor(private _groupnodeService: GroupnodeService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Groupnode[]> {
    return this._groupnodeService.getGroupnodes();
  }

  disconnect() {}
}
