interface Action {
  type: string;
  payload?: any;
}
interface Reducer<T> {
  (state: T, action: Action): T;
}

// Define Actions
let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };

let reducer: Reducer<number> = (state: number, action: Action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
  // If there is no action defined return state
  // State is not mutable
  return state;
};

// In this case, we passed a state of the number 0
// and a INCREMENT action. The result from this reducer
// is the state 1.

console.log(reducer(0, incrementAction)); // -> 1
console.log(reducer(1, incrementAction)); // -> 2

console.log(reducer(100, decrementAction)); // -> 99
