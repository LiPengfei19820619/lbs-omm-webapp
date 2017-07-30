import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

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
                                    err => alert(err.message));
  }

  cancel(): void {
    this.location.back();
  }

}
