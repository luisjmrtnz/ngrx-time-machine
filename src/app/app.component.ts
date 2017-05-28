import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/merge';

import { ClockActions } from './actions';

export interface AppState {
  clock: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clock$;
  click$ = new Subject<any>();

  constructor(private store: Store<AppState>, private actions: ClockActions) {
    this.clock$ = store.select(state => state.clock);
    Observable.merge(
      this.click$.mapTo(this.actions.setHours()),
      Observable.interval(1000).mapTo(this.actions.setSeconds())
    )
    .subscribe( action => this.store.dispatch(action));
  }


}
