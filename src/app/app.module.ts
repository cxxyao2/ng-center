import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCenterModule } from './material-center.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationFooterComponent } from './components/navigation-footer/navigation-footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ResponsiveCardComponent } from './mock/responsive-card/responsive-card.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { ConfirmCallerComponent } from './dialogs/confirm-caller/confirm-caller.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    NavigationFooterComponent,
    SidebarComponent,
    ResponsiveCardComponent,
    ConfirmComponent,
    ConfirmCallerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialCenterModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
