import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpertProfilePageComponent } from './expert-profile-page/expert-profile-page.component';
import { SearcresultsComponent } from './searcresults/searcresults.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertProfilePageComponent,
    SearcresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
