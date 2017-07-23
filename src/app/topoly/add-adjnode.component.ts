import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private adjnodeService: AdjnodeService) {

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
    alert("nodeid:" + this.adjnodeForm.value.id);
  }
}
