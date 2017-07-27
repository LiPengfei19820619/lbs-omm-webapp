import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Adjnode } from './adjnode';
import { AdjnodeService } from './adjnode.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-mod-adjnode',
  templateUrl: './mod-adjnode.component.html',
  styleUrls: ['./mod-adjnode.component.css']
})
export class ModAdjnodeComponent implements OnInit {
  node: Adjnode

  constructor(
    private adjnodeService: AdjnodeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
              .switchMap((params: ParamMap) => this.adjnodeService.getAdjnode(+params.get('id')))
              .subscribe(node => this.node = node);
  }

  goBack(): void {
    this.location.back();
  }

}
