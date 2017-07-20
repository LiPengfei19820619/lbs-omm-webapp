import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { MdTableModule } from '@angular/material';

import {CdkTableModule} from '@angular/cdk';

import { AppComponent } from './app.component';
import { AdjnodesComponent } from './topoly/adjnodes.component';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    FormsModule,
    MdTableModule,
    CdkTableModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdjnodesComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
