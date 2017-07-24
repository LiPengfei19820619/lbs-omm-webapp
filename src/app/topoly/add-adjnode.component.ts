import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Adjnode } from './adjnode';
import { AdjnodeService } from './adjnode.service';

@Component({
  selector: 'app-add-adjnode',
  templateUrl: './add-adjnode.component.html',
  styleUrls: ['./add-adjnode.component.css']
})
export class AddAdjnodeComponent implements OnChanges {
  @Input() node: Adjnode;
  
  adjnodeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adjnodeService: AdjnodeService,
    private route: Router) {

      this.createForm();
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

  ngOnChanges() {
  }

  onSubmit() {
    this.node = this.adjnodeForm.value;
    alert("submit, nodeid:" + JSON.stringify(this.node));
    this.adjnodeService.create(this.node)
                       .subscribe(node => {
                                      alert("node:" + JSON.stringify(node));
                                      this.route.navigate(['adjnodes']);
                        },
                                  err => alert(err.message));
  }

  cancel() {
    alert("cancel");
  }
}
