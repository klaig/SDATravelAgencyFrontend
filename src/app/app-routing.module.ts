import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ToursComponent } from './pages/tours/tours.component';
import { PromotedToursComponent } from './pages/promoted-tours/promoted-tours.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'destinations', component: DestinationsComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'tours', component: ToursComponent},
      { path: 'promotedTours', component: PromotedToursComponent}
      // ... other routes ...
    ]
  },
  { path: 'login', component: LoginComponent },
  // Redirect any other URL to HomeComponent
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
