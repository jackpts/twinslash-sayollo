import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGuard } from "./guards/login.guard";
import { HomeModule, LoginModule } from "./components";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
