import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddValueComponent } from './components/add-value/add-value.component';
import { ValueDetailsComponent } from './components/value-details/value-details.component';
import { ValuesListComponent } from './components/values-list/values-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddValueComponent,
    ValueDetailsComponent,
    ValuesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
