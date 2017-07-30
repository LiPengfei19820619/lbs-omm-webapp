import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { Nodegroup } from './nodegroup';
import { NodegroupService } from './nodegroup.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-mod-nodegroup',
  templateUrl: './mod-nodegroup.component.html',
  styleUrls: ['./mod-nodegroup.component.css']
})
export class ModNodegroupComponent implements OnInit {
  group: Nodegroup
  
  nodegroupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nodegroupService: NodegroupService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.group = new Nodegroup();
    this.createForm();
  }

  ngOnInit(): void {
    this.route.paramMap
              .switchMap((params: ParamMap) => {
                let id = +params.get('id');
                return this.nodegroupService.getNodegroup(+id);
              } )
              .subscribe(group => {
                    if (group.id) {
                      console.log("group not null:" + group.id);
                      this.group = group;
                    } else {
                      this.group = new Nodegroup();
                      this.group.id = 0;
                      this.group.type = 1;
                      this.group.name = "";
                    }
                    console.log("this.group.id:" + this.group.id);
                    this.nodegroupForm.setValue({
                      id: this.group.id,
                      type: this.group.type,
                      name: this.group.name
                    });
                  },
                  err => {}
              );
  }

  createForm() {
    this.nodegroupForm = this.fb.group({
      id : 0,
      type : 1,
      name: ""
    });
  }

  onSubmit() {
    this.group = this.nodegroupForm.value;
    this.nodegroupService.update(this.group)
                        .subscribe(group => {
                                      alert("修改节点组成功");
                                      this.goBack();
                                  },
                                  err => alert(err.message)
                                  );
  }

  goBack(): void {
    this.location.back();
  }

}
