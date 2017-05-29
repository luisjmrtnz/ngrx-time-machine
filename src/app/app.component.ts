import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';

import { ClockActions } from './actions';

export interface AppState {
  clock: Date,
  people: any[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  clock$;
  click$;
  seconds$;
  people$;

  constructor(
    private store: Store<AppState>, 
    private actions: ClockActions) {
    /* Initializing Variables */
    this.clock$ = store.select(state => state.clock);
    this.people$ = store.select(state => state.people);
    this.click$ = new Subject<any>().map(num => this.actions.setHours(num));
    this.seconds$ = Observable.interval(1000).mapTo(this.actions.setSeconds(1));
  }

  ngOnInit() {
    Observable.merge(this.click$,this.seconds$)
      .subscribe((action: Action) => this.store.dispatch(action));
  }

  onUpdate($event) {
    this.store.dispatch(this.actions.updateTime($event));
  }
}
