import { AppState } from '../app.state';
import { AppStore } from '../app.store';
import { Component, Inject } from '@angular/core';
import { Store } from 'redux'; // import Store from Redux

import * as CounterActions from '../counter.actions'; // import our action creators


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => {this.readState();
    console.log('state changed');
    });
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
