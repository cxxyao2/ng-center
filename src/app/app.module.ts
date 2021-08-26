import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { ConfirmComponent } from './shared/confirm/confirm.component';
import { ConfirmCallerComponent } from './shared/confirm-caller/confirm-caller.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SidebarListItemComponent } from './components/sidebar-list-item/sidebar-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Address1Component,
    Navbar1Component,
    Dashboard1Component,
    Tree1Component,
    Draggrop1Component,
    SidebarComponent,
    ConfirmComponent,
    ConfirmCallerComponent,
    NavbarComponent,
    TopNavComponent,
    SidebarListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCenterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
