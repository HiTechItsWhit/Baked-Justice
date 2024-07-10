import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderFormComponent } from './order-form/order-form.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'About-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product/:id', component: OrderFormComponent },
];
