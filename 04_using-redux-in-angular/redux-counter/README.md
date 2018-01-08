# ReduxCounter

## Defining the Application State

    app.state.ts
    export interface AppState {
        counter: number;
    }

## Defining the Reducers

    reducer will handle incrementing and decrementing the counter in the application state

    counter.reducer.ts
    import { Reducer, Action } from 'redux';
    import { AppState } from './app.state';
    import {INCREMENT, DECREMENT} from './counter.actions';

    const initialState: AppState = { counter: 0 };

    export const counterReducer: Reducer<AppState> =
        (state: AppState = initialState, action: Action): AppState => {
            switch (action.type) {
            case INCREMENT:
            return Object.assign({}, state, { counter: state.counter + 1 });
            case DECREMENT:
            return Object.assign({}, state, { counter: state.counter - 1 });
            default:
            return state;
            }
        };

## Defining Action Creators

    Our action creators are functions which return objects that define the action to be taken. 

    counter.actions.ts
    import {Action, ActionCreator} from 'redux';

    export const INCREMENT: string = 'INCREMENT';
    export const increment: ActionCreator<Action> = () => ({
        type: INCREMENT
    });

    export const DECREMENT: string = 'DECREMENT';
    export const decrement: ActionCreator<Action> = () => ({
    type: DECREMENT
    });

## Creating the Store

    import { InjectionToken } from '@angular/core';
    import {createStore, Store, compose, StoreEnhancer } from 'redux';
    import { AppState } from './app.state';
    import {counterReducer as reducer} from './counter.reducer';

    export const AppStore = new InjectionToken('App.store');

    const devtools: StoreEnhancer<AppState> =
    window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

    export function createAppStore(): Store<AppState> {
    return createStore<AppState>(
        reducer,
        compose(devtools) 
        to our Redux store:
    );
    }
    export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
    ]

## Install the Redux Devtools Chrome extension

    In order to use the Devtools we have to do one thing: add it to our store. 