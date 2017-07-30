import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdjnodesComponent } from './topoly/adjnode/adjnodes.component';
import { AddAdjnodeComponent } from './topoly/adjnode/add-adjnode.component';
import { ModAdjnodeComponent } from './topoly/adjnode/mod-adjnode.component';

import { NodegroupsComponent } from './topoly/nodegroup/nodegroups.component';
import { AddNodegroupComponent } from './topoly/nodegroup/add-nodegroup.component';
import { ModNodegroupComponent } from './topoly/nodegroup/mod-nodegroup.component';

import { GroupnodesComponent } from './topoly/groupnode/groupnodes.component';
import { AddGroupnodeComponent } from './topoly/groupnode/add-groupnode.component';

import { SecurityctrlPropertyComponent } from './securityctrl/securityctrl-property.component';
import { AddSecurityctrlPropertyComponent } from './securityctrl/add-securityctrl-property.component';
import { ModSecurityctrlPropertyComponent } from './securityctrl/mod-securityctrl-property.component';

const routes : Routes = [
  {path: 'adjnodes', component: AdjnodesComponent},
  {path: 'add-adjnode', component: AddAdjnodeComponent},
  {path: 'mod-adjnode/:id', component: ModAdjnodeComponent},

  {path: 'nodegroups', component: NodegroupsComponent},
  {path: 'add-nodegroup', component: AddNodegroupComponent},
  {path: 'mod-nodegroup/:id', component: ModNodegroupComponent},

  {path: 'groupnodes', component: GroupnodesComponent},
  {path: 'add-groupnode', component: AddGroupnodeComponent},

  {path: 'securityctrl-property', component: SecurityctrlPropertyComponent},
  {path: 'add-securityctrl-property', component: AddSecurityctrlPropertyComponent},
  {path: 'mod-securityctrl-property', component: ModSecurityctrlPropertyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
