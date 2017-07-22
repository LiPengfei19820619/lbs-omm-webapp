import { Component, OnInit } from '@angular/core';

import { Adjnode } from './adjnode';
import { AdjnodeService } from './adjnode.service';

@Component({
  selector: 'app-add-adjnode',
  templateUrl: './add-adjnode.component.html',
  styleUrls: ['./add-adjnode.component.css']
})
export class AddAdjnodeComponent implements OnInit {
  node: Adjnode

  constructor(private adjnodeService: AdjnodeService) { }

  ngOnInit() {
  }

  addNode(nodeID: number): void {
    alert("nodeID:" + nodeID)
  }

}
