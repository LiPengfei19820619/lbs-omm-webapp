import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Location }                 from '@angular/common';

import { SecurityctrlProperty } from './securityctrl-property';
import { SecurityctrlPropertyService } from './securityctrl-property.service';

@Component({
  selector: 'app-add-securityctrl-property',
  templateUrl: './add-securityctrl-property.component.html',
  styleUrls: ['./add-securityctrl-property.component.css']
})
export class AddSecurityctrlPropertyComponent implements OnInit {
  property: SecurityctrlProperty
  
  propertyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private propertyService: SecurityctrlPropertyService,
    private location: Location
  ) {
    this.property = new SecurityctrlProperty();
    this.createForm();
  }

  ngOnInit(): void {
    
  }

  createForm() {
    this.propertyForm = this.fb.group({
      ipaddr : "",
      ipver : 4,
      port: 0,
      hostname: "",
      domain: "",
      nodegroup: 0
    });
  }

  onSubmit() {
    this.property = this.propertyForm.value;
    this.propertyService.create(this.property)
                        .subscribe(res => {
                                      alert("增加安全管控属性配置成功");
                                      this.goBack();
                                  },
                                  err => alert(err.message)
                                  );
  }

  goBack(): void {
    this.location.back();
  }
}
