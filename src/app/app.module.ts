import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdjnodesComponent } from './topoly/adjnodes.component';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    FormsModule,
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
