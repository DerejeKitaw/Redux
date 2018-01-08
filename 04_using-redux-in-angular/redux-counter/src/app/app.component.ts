import { Component, Inject } from '@angular/core';
import { Store } from 'redux'; // import Store from Redux
import { AppStore } from './app.store';
import { AppState } from './app.state';

// This syntax will let us call CounterActions.increment() to create an INCREMENT action.
import * as CounterActions from './counter.actions'; // import our action creators

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  // Need this component depends on the Store, so we need to inject it in the constructor.
  // This is how we use our custom AppStore token to inject a dependency:
  // use the @Inject decorator to inject AppStore - notice that we define the type of the variable store to Store<AppState>
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => {this.readState();
    console.log('state changed');
    });
    // The store will call subscribe only when a new action is dispatched,
    // so in this case we need to make sure we manually call readState at least once
    // to ensure that our component gets the initial data.
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
