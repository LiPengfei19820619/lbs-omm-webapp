import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { Groupnode } from './groupnode';
import { GroupnodeService } from './groupnode.service';

@Component({
  selector: 'app-add-groupnode',
  templateUrl: './add-groupnode.component.html',
  styleUrls: ['./add-groupnode.component.css']
})
export class AddGroupnodeComponent implements OnChanges {
  @Input() groupnode: Groupnode;
  
  groupnodeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private groupnodeService: GroupnodeService,
    private route: Router,
    private location: Location) {

      this.createForm();
  }

  createForm() {
    this.groupnodeForm = this.fb.group({
      groupid : 0,
      nodeid : 0
    });
  }

  ngOnChanges() {
  }

  onSubmit() {
    this.groupnode = this.groupnodeForm.value;
    alert("submit, nodeid:" + JSON.stringify(this.groupnode));
    this.groupnodeService.create(this.groupnode)
                         .subscribe(result => {
                                      alert("result:" + JSON.stringify(result));
                                      this.route.navigate(['groupnodes']);
                                    },
                                    err => alert(err.message));
  }

  cancel(): void {
    this.location.back();
  }
}
