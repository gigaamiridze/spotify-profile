import { createContext, useContext, useReducer } from 'react';
import { IStateContext, IStateProvider } from '../interfaces';
import { reducer, initialState } from '../utils';

const StateContext = createContext({} as IStateContext);

export const useState = () => {
  return useContext(StateContext);
}

export const StateProvider = ({ children }: IStateProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    state,
    dispatch,
  }
  
  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  )
}