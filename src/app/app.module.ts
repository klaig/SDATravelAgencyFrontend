import { Input, NgModule, Output, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminApiComponent } from './services/admin-api/admin-api.component';
import { TourApiComponent } from './services/tour-api/tour-api.component';
import { PurchasedataApiComponent } from './services/purchasedata-api/purchasedata-api.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DateAdapter, MatRippleModule, provideNativeDateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from './shared/custom-date-adapter';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { DestinationAutoCompleteComponent } from './shared/destination-auto-complete/destination-auto-complete.component';
import { CustomNumberInputComponent } from './shared/custom-number-input/custom-number-input.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import {MatDividerModule} from '@angular/material/divider';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ToursComponent } from './pages/tours/tours.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AdminApiComponent,
    PurchasedataApiComponent,
    TourApiComponent,
    DestinationAutoCompleteComponent,
    CustomNumberInputComponent,
    HomeComponent,
    LoginComponent,
    DestinationsComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminDashboardComponent,
    UserProfileComponent,
    ToursComponent,
    LayoutComponent
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
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
    AsyncPipe,
    ReactiveFormsModule,
    NgIf,
    CommonModule,
    MatTabLabel,
    MatMenuModule,
    MatDividerModule,
    MatRippleModule
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
