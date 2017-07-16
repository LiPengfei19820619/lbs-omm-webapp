import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdjnodesComponent } from './topoly/adjnodes.component'

const routes : Routes = [
  {path: 'adjnodes', component: AdjnodesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
