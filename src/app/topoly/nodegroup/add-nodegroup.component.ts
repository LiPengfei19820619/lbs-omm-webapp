import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { OperationResult } from '../../app-operation-result';

import { Nodegroup } from './nodegroup';
import { NodegroupService } from './nodegroup.service';

@Component({
  selector: 'app-add-nodegroup',
  templateUrl: './add-nodegroup.component.html',
  styleUrls: ['./add-nodegroup.component.css']
})
export class AddNodegroupComponent implements OnChanges {
  @Input() group: Nodegroup;
  
  nodegroupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nodegroupService: NodegroupService,
    private route: Router,
    private location: Location) {

      this.createForm();
  }

  createForm() {
    this.nodegroupForm = this.fb.group({
      id : 0,
      type : 1,
      name: ""
    });
  }

  ngOnChanges() {
  }

  onSubmit() {
    this.group = this.nodegroupForm.value;
    alert("submit, nodeid:" + JSON.stringify(this.group));
    this.nodegroupService.create(this.group)
                         .subscribe(result => {
                                      alert("result:" + JSON.stringify(result));
                                      this.route.navigate(['nodegroups']);
                                    },
                                    err => this.handleError(err),
                                    () => { alert("complete")});
  }

  cancel(): void {
    this.location.back();
  }

  handleError(error: any) {
    alert("typeof(error):" + typeof(error) + ",typeof(error._body):" + error._body);

    let res : OperationResult = JSON.parse(error._body);

    let info = res.error;

    alert("增加节点组失败，原因：" + info.reason)
  }

}
