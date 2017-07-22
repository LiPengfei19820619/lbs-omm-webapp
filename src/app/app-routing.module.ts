import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdjnodesComponent } from './topoly/adjnodes.component'
import { AddAdjnodeComponent } from './topoly/add-adjnode.component'

const routes : Routes = [
  {path: 'adjnodes', component: AdjnodesComponent},
  {path: 'add-adjnode', component: AddAdjnodeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
