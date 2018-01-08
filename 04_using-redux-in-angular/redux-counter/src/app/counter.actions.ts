import {
    Action,
    ActionCreator
  } from 'redux';

// Notice that our action creator functions return the type ActionCreator<Action>.
// ActionCreator is a generic class defined by Redux that we use to define functions that create actions.
// In this case we’re using the concrete class Action, but we could use a more specific Action class,
// such as AddMessageAction that we defined in the last section.


export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({
    type: INCREMENT
  });

  export const DECREMENT: string = 'DECREMENT';
  export const decrement: ActionCreator<Action> = () => ({
    type: DECREMENT
  });
