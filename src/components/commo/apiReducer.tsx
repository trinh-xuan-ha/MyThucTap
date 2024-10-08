import { useState, Dispatch } from 'react';

// Define generic types for the state and the action
type Reducer<State, Action> = (state: State, action: Action) => State;

export function useCustomReducer<State, Action>(reducer: Reducer<State, Action>, initialValue: State): [State, Dispatch<Action>] {
  const [state, setState] = useState<State>(initialValue);

  function dispatch(action: Action) {
    const newState = reducer(state, action);
    setState(newState);
  }

  return [state, dispatch];
}