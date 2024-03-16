import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminApiComponent } from './admin-api/admin-api.component';
import { TourApiComponent } from './tour-api/tour-api.component';
import { PurchasedataApiComponent } from './purchasedata-api/purchasedata-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AdminApiComponent,
    TourApiComponent,
    PurchasedataApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
