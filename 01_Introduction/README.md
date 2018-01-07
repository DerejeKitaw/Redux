# Redux

## In Redux we do not modify the state. Instead, we create actions which instruct the reducer on how to generate a new state. 

## In Redux, we keep our state in the store. 

## The store has the responsibility of running the reducer and then keeping the newstate. 

`In Redux, we generally have 1 store and 1 top-level reducer per application.`

## Dispatch takes an action, sends it to the reducer and then updates the value of _state with the return value

`dispatch doesn’t return anything. It’s only updating the store’s state (once the result returns).` 

`This is an important principle of Redux: dispatching actions is a “fire-and-forget” maneuver. Dispatching actions is not a direct manipulation of the state, and it doesn’t return the new state. `

`When we dispatch actions, we’re sending off a notification of what happened. If we want to know what the current state of the system is, we have to check the state of the store.`