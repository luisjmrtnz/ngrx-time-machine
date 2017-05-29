import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { clockReducer, peopleReducer } from './reducers';
import { ClockActions } from './actions';
import { ClockComponent } from './clock.component';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ 
      clock: clockReducer,
      people: peopleReducer
    })
  ],
  providers: [ ClockActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
