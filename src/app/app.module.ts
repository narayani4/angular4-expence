import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import {ExpenceComponent} from './expence.component';
import {ExpenceService} from './expence.service';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ExpenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
