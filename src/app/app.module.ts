import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { clockReducer } from './reducers';

import { ClockActions } from './actions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ clock: clockReducer })
  ],
  providers: [ ClockActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
