import { Action, Reducer, Store, createStore } from 'redux';

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

//#region 01a_Define action creator
class MessageActions {
  static addMessage(message: string): AddMessageAction {
    return {
      type: 'ADD_MESSAGE',
      message: message
    };
  }
  static deleteMessage(index: number): DeleteMessageAction {
    return {
      type: 'DELETE_MESSAGE',
      index: index
    };
  }
}
//#endregion

//#region 02_Define-Store

// Done by Redux

//#endregion
let initialState: AppState = { messages: [] };
//#region 03_Define reducer
let reducer: Reducer<AppState> = (
  state: AppState = initialState,
  action: Action
) => {
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
let store: Store<AppState> = createStore<AppState>(reducer);
console.log(store.getState()); // -> { messages: [] }
//#endregion

//#region 05_subscribe to store

// Done by Redux

//#endregion

//#region 06_Dispatch store
store.dispatch(
  MessageActions.addMessage('Would you say the fringe was made of silk?')
);

store.dispatch(
  MessageActions.addMessage('Wouldnt have no other kind but silk')
);

store.dispatch(
  MessageActions.addMessage('Has it really got a team of snow white horses?')
);

console.log(store.getState());
// ->
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Wouldnt have no other kind but silk',
//      'Has it really got a team of snow white horses?' ] }

store.dispatch(MessageActions.deleteMessage(1));

console.log(store.getState());
// ->
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Has it really got a team of snow white horses?' ] }

store.dispatch(MessageActions.deleteMessage(0));

console.log(store.getState());
// ->
// { messages: [ 'Has it really got a team of snow white horses?' ] }

//#endregion
