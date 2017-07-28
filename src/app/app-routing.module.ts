import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdjnodesComponent } from './topoly/adjnode/adjnodes.component'
import { AddAdjnodeComponent } from './topoly/adjnode/add-adjnode.component'
import { ModAdjnodeComponent } from './topoly/adjnode/mod-adjnode.component'

const routes : Routes = [
  {path: 'adjnodes', component: AdjnodesComponent},
  {path: 'add-adjnode', component: AddAdjnodeComponent},
  {path: 'mod-adjnode/:id', component: ModAdjnodeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
