import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { MdTableModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdListModule } from '@angular/material';

import {CdkTableModule} from '@angular/cdk';

import { AppComponent } from './app.component';
import { AdjnodesComponent } from './topoly/adjnodes.component';
import { AdjnodeService } from './topoly/adjnode.service';

import { AppRoutingModule } from './app-routing.module';
import { AddAdjnodeComponent } from './topoly/add-adjnode.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdTooltipModule,
    MdInputModule,
    MdListModule,
    FormsModule,
    ReactiveFormsModule,
    MdTableModule,
    CdkTableModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdjnodesComponent,
    AddAdjnodeComponent
  ],
  
  providers: [AdjnodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
