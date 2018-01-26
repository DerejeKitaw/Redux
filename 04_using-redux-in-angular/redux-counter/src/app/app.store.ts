import { InjectionToken } from '@angular/core';
import { createStore, Store, compose, StoreEnhancer } from 'redux';
import { AppState } from './app.state';
import { counterReducer as reducer } from './counter.reducer';

// Store is an interface, not a class and, unfortunately, we can’t use interfaces as a dependency injection key.
// we can’t use an interface as a DI key, it’s because TypeScript interfaces are removed after compilation and
// not available at runtime.

// This means we need to create our own token that we’ll use for injecting the store.
// Angular makes this easy to do. We can import it from anywhere in our application;
// Here we have created a const AppStore which uses the InjectionToken class from Angular.
// InjectionToken is a better choice than injecting a string directly because it helps us avoid collisions.
// Now we can use this token AppStore with provide.

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> = window['devToolsExtension']
  ? window['devToolsExtension']()
  : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools) // In order to use this devtools we pass it as middleware to our Redux store:
  );
}
// providers: [appStoreProviders],
export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
