import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
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
  @Input() node: Adjnode

  adjnodeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adjnodeService: AdjnodeService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.node = {id:0, ipaddr:'', ipver:4, port:0, hostname:'', domain:'', type:1};
    this.createForm();
  }

  ngOnInit(): void {
    this.route.paramMap
              .switchMap((params: ParamMap) => {
                let id = +params.get('id');
                return this.adjnodeService.getAdjnode(+id);
              } )
              .subscribe(node => {
                    if (node != null) {
                      this.node = node;
                    } else {
                      this.node = {id:0, ipaddr:'', ipver:4, port:0, hostname:'', domain:'', type:1};
                    }
                    this.adjnodeForm.setValue({
                      id: this.node.id,
                      ipaddr: this.node.ipaddr,
                      ipver: this.node.ipver,
                      port: this.node.port,
                      hostname: this.node.hostname,
                      domain: this.node.domain,
                      type: this.node.type
                    });
                  },
                  err => {}
              );
  }

  createForm() {
    this.adjnodeForm = this.fb.group({
      id : 0,
      ipaddr : '',
      ipver : 4,
      port : 0,
      hostname : '',
      domain : '',
      type : 1
    });
  }

  onSubmit() {
    this.node = this.adjnodeForm.value;
    this.adjnodeService.update(this.node)
                       .subscribe(node => {
                                     alert("node:" + JSON.stringify(node));
                                     this.goBack();
                                  },
                                  err => alert(err.message)
                                 );
  }

  goBack(): void {
    this.location.back();
  }

}
