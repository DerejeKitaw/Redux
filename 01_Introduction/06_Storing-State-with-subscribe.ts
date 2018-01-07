//#region 01_Define interfaces
interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}
//#endregion 

//#region 02_Define-Store
class Store<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(
    private reducer: Reducer<T>,
    initialState: T
  ) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => { // returns an "unsubscribe" function
      this._listeners = this._listeners.filter(l => l !== listener);
    };
  }
}
//#endregion

//#region 03_Define reducer
let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
    return state + 1;
    case 'DECREMENT':
    return state - 1;
    case 'PLUS':
    return state + action.payload;
    default:
    return state;
  }
};
//#endregion 

//#region 04_create new store
let store = new Store<number>(reducer, 0);
console.log(store.getState()); // -> 0
//#endregion
  
//#region 05_subscribe
let unsubscribe = store.subscribe(() => {
  console.log('subscribed: ', store.getState());
});
//#endregion

//#region 06_Dispatch store
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 1
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 2

unsubscribe();
store.dispatch({ type: 'DECREMENT' }); // (nothing logged)

// decrement happened, even though we weren't listening for it
console.log(store.getState()); // -> 1

//#endregion 