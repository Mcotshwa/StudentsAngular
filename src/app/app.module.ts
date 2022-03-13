import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadAddressesComponent } from './read-addresses/read-addresses.component';

import { DeleteAddressComponent } from './read-addresses/delete-address/delete-address.component';
import { UpdateAddressComponent } from './read-addresses/update-address/update-address.component';
import { AddAddressComponent } from './read-addresses/add-address/add-address.component';
import { MaterialModule } from './read-addresses/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadCitiesComponent } from './read-cities/read-cities.component';
import { AddCityComponent } from './ReadCities/add-city/add-city.component';
import { DeleteCityComponent } from './read-cities/delete-city/delete-city.component';
import { UpdateCityComponent } from './read-cities/update-city/update-city.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadAddressesComponent,
    AddAddressComponent,
    DeleteAddressComponent,
    UpdateAddressComponent,
    ReadCitiesComponent,
    AddCityComponent,
    DeleteCityComponent,
    UpdateCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
