import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCenterModule } from './material-center.module';
import { Address1Component } from './mat-schematics/address1/address1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Navbar1Component } from './mat-schematics/navbar1/navbar1.component';
import { Dashboard1Component } from './mat-schematics/dashboard1/dashboard1.component';
import { Tree1Component } from './mat-schematics/tree1/tree1.component';
import { Draggrop1Component } from './mat-schematics/draggrop1/draggrop1.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    Address1Component,
    Navbar1Component,
    Dashboard1Component,
    Tree1Component,
    Draggrop1Component,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCenterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
