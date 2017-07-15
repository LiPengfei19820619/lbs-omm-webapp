import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdjnodesComponent } from './topoly/adjnodes/adjnodes.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdjnodesComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
