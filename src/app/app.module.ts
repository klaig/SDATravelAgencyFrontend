import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminApiComponent } from './admin-api/admin-api.component';
import { TourApiComponent } from './tour-api/tour-api.component';
import { PurchasedataApiComponent } from './purchasedata-api/purchasedata-api.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from './shared/custom-date-adapter';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AdminApiComponent,
    PurchasedataApiComponent,
    TourApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule, 
    MatTooltipModule, 
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: DateAdapter, useClass: CustomDateAdapter },
    provideNativeDateAdapter(),
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TourApiComponent), multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
