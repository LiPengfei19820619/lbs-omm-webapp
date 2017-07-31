import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { SecurityctrlProperty } from './securityctrl-property';
import { SecurityctrlPropertyService } from './securityctrl-property.service';

@Component({
  selector: 'app-mod-securityctrl-property',
  templateUrl: './mod-securityctrl-property.component.html',
  styleUrls: ['./mod-securityctrl-property.component.css']
})
export class ModSecurityctrlPropertyComponent implements OnInit {
  property: SecurityctrlProperty
  
  propertyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private propertyService: SecurityctrlPropertyService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.property = new SecurityctrlProperty();
    this.createForm();
  }

  ngOnInit(): void {
    this.propertyService.getSecurityctrlProperty()
                        .subscribe(propertys => {
                                    let property: SecurityctrlProperty = propertys[0];
                                    if (property) {
                                      this.property = property;
                                    }
                                    this.propertyForm.setValue({
                                      ipaddr: this.property.ipaddr,
                                      ipver: this.property.ipver,
                                      port: this.property.port,
                                      hostname: this.property.hostname,
                                      domain: this.property.domain,
                                      nodegroup: this.property.nodegroup
                                    });
                                  })
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
    this.propertyService.update(this.property)
                        .subscribe(res => {
                                      alert("修改安全管控属性配置成功");
                                      this.goBack();
                                  },
                                  err => alert(err.message)
                                  );
  }

  goBack(): void {
    this.location.back();
  }
}
