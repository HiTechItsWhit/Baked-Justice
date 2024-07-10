import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { AppRoutingModule } from 'app.routes; // Ensure you have the routing module

@NgModule({
  declarations: [AppComponent, LandingViewComponent, OrderViewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule, // Include the routing module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
