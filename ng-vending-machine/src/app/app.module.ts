import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule} from './admin/admin.module'
import {CartModule} from './cart/cart.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// import { GaugeModule } from 'angular-gauge';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input'
import {HomeModule} from './home/home.module'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // GaugeModule.forRoot(),
    MatButtonModule,
    AdminModule,
    // MatInputModule,
    CartModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
