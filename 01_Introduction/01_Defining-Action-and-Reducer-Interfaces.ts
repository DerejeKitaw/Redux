interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  return state;
};

// Bydefault,reducers return the original state.
// In this case, we passed a state of the number 0
// and a null action. The result from this reducer
// is the state 0.
console.log(reducer(0, null)); // -> 0
