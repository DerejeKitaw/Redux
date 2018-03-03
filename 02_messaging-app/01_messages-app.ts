import { Action, Reducer, Store } from './lib/miniRedux';

//#region 01_Define interfaces
interface AppState {
  messages: string[];
}
interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}
//#endregion

//#region 02_Define-Store
// Done by lib
//#endregion

//#region 03_Define reducer
let reducer: Reducer<AppState> = (
  state: AppState,
  action: Action
): AppState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: state.messages.concat((<AddMessageAction>action).message)
      };
    case 'DELETE_MESSAGE':
      let idx = (<DeleteMessageAction>action).index;
      return {
        messages: [
          ...state.messages.slice(0, idx),
          ...state.messages.slice(idx + 1, state.messages.length)
        ]
      };
    default:
      return state;
  }
};
//#endregion

//#region 04_create new store
let store = new Store<AppState>(reducer, { messages: [] });
console.log(store.getState()); // -> { messages: [] }
//#endregion

//#region 05_subscribe to store
// Done by lib
//#endregion

//#region 06_Dispatch store
store.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Would you say the fringe was made of silk?'
} as AddMessageAction);

store.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Wouldnt have no other kind but silk'
} as AddMessageAction);

store.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Has it really got a team of snow white horses?'
} as AddMessageAction);

console.log(store.getState());
// ->
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Wouldnt have no other kind but silk',
//      'Has it really got a team of snow white horses?' ] }

store.dispatch({
  type: 'DELETE_MESSAGE',
  index: 1
} as DeleteMessageAction);

console.log(store.getState());
// ->
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Has it really got a team of snow white horses?' ] }

store.dispatch({
  type: 'DELETE_MESSAGE',
  index: 0
} as DeleteMessageAction);

console.log(store.getState());
// ->
// { messages: [ 'Has it really got a team of snow white horses?' ] }

//#endregion
