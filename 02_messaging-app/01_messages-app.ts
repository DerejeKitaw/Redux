import {
    Action,
    Reducer,
    Store
  } from './lib/miniRedux';
  
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

//#endregion

//#region 03_Define reducer
let reducer: Reducer<AppState> =
  (state: AppState, action: Action): AppState => {
  switch (action.type) {
  case 'ADD_MESSAGE':
    return {
      messages: state.messages.concat(
        (<AddMessageAction>action).message
      ),
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

//#endregion

//#region 05_subscribe to store

//#endregion

//#region 06_Dispatch store

//#endregion 