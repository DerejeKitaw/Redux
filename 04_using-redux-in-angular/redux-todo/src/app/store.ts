import { ITodo } from './todo';
import {TOGGLE_TODO , REMOVE_TODO , REMOVE_ALL_TODOS} from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state, action) {
  return state;
}
